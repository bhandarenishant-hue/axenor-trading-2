import { Controller, Get, Param, Query, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { ProductQueryDto } from './dto/product.dto.js';
import type { ApiResponse } from '../../common/interfaces/api-response.interface.js';
import type { Product } from './dto/product.dto.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(@Query() query: ProductQueryDto): ApiResponse<Product[]> {
    const { products, meta } = this.productsService.findAll(query);
    return {
      success: true,
      data: products,
      meta,
    };
  }

  @Get('categories')
  getCategories(): ApiResponse<string[]> {
    const categories = this.productsService.getCategories();
    return {
      success: true,
      data: categories,
    };
  }

  @Get(':slug')
  findBySlug(
    @Param('slug') slug: string,
  ): ApiResponse<{ product: Product; relatedProducts: Product[] }> {
    const result = this.productsService.findBySlug(slug);
    if (!result) {
      throw new NotFoundException(`Product with slug "${slug}" not found`);
    }
    return {
      success: true,
      data: result,
    };
  }
}
