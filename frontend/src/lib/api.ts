import {
  products as allProducts,
  getProductBySlug,
  getCategories,
  type Product as DataProduct,
} from "@/data/products";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  sourceMarket: "india" | "china";
  description: string;
  highlights: string[];
  specifications: Record<string, string>;
  image: string;
  relatedProducts?: Product[];
}

export interface ProductsResponse {
  data: Product[];
  total: number;
  page: number;
  limit: number;
}

export interface InquiryPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product?: string;
  quantity?: string;
  message: string;
}

export interface SupplierPayload {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  productCategories: string[];
  description: string;
  website?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

function toProduct(p: DataProduct): Product {
  return {
    id: p.id,
    slug: p.slug,
    name: p.name,
    category: p.category,
    sourceMarket: p.sourceMarket,
    description: p.description,
    highlights: p.highlights,
    specifications: p.specifications,
    image: p.image,
  };
}

export { getCategories };

export const api = {
  products: {
    async list(params?: {
      search?: string;
      category?: string;
      sourceMarket?: string;
      page?: number;
      limit?: number;
    }): Promise<ProductsResponse> {
      let filtered = [...allProducts];

      if (params?.search) {
        const q = params.search.toLowerCase();
        filtered = filtered.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );
      }
      if (params?.sourceMarket) {
        filtered = filtered.filter(
          (p) => p.sourceMarket === params.sourceMarket
        );
      }
      if (params?.category) {
        filtered = filtered.filter((p) => p.category === params.category);
      }

      const page = params?.page || 1;
      const limit = params?.limit || 100;
      const start = (page - 1) * limit;
      const paged = filtered.slice(start, start + limit);

      return {
        data: paged.map(toProduct),
        total: filtered.length,
        page,
        limit,
      };
    },

    async get(slug: string): Promise<Product> {
      const result = getProductBySlug(slug);
      if (!result) throw new Error("Product not found");
      const product = toProduct(result);
      product.relatedProducts = result.relatedProducts.map(toProduct);
      return product;
    },
  },

  inquiries: {
    async create(_data: InquiryPayload) {
      await new Promise((r) => setTimeout(r, 800));
      return { success: true, message: "Inquiry submitted successfully." };
    },
  },

  suppliers: {
    async create(_data: SupplierPayload) {
      await new Promise((r) => setTimeout(r, 800));
      return { success: true, message: "Supplier application submitted." };
    },
  },

  contact: {
    async create(_data: ContactPayload) {
      await new Promise((r) => setTimeout(r, 800));
      return { success: true, message: "Message sent successfully." };
    },
  },
};
