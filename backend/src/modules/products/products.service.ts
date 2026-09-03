import { Injectable } from '@nestjs/common';
import type { Product, ProductQueryDto } from './dto/product.dto.js';
import type { PaginationMeta } from '../../common/interfaces/api-response.interface.js';
import { productsSeed } from './data/products.seed.js';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = productsSeed;

  findAll(query: ProductQueryDto): { products: Product[]; meta: PaginationMeta } {
    let filtered = [...this.products];

    // Filter by source market
    if (query.sourceMarket) {
      filtered = filtered.filter(
        (p) => p.sourceMarket === query.sourceMarket!.toLowerCase(),
      );
    }

    // Filter by category
    if (query.category) {
      const categoryLower = query.category.toLowerCase();
      filtered = filtered.filter((p) =>
        p.category.toLowerCase().includes(categoryLower),
      );
    }

    // Search across name, description, and category
    if (query.search) {
      const searchLower = query.search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower) ||
          p.category.toLowerCase().includes(searchLower),
      );
    }

    const total = filtered.length;
    const page = query.page ?? 1;
    const limit = query.limit ?? 12;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const paginatedProducts = filtered.slice(start, start + limit);

    return {
      products: paginatedProducts,
      meta: { page, limit, total, totalPages },
    };
  }

  findBySlug(slug: string): { product: Product; relatedProducts: Product[] } | null {
    const product = this.products.find((p) => p.slug === slug);
    if (!product) {
      return null;
    }

    const relatedProducts = product.relatedProductSlugs
      .map((relSlug) => this.products.find((p) => p.slug === relSlug))
      .filter((p): p is Product => p !== undefined);

    return { product, relatedProducts };
  }

  getCategories(): string[] {
    const categories = new Set(this.products.map((p) => p.category));
    return Array.from(categories).sort();
  }
}
