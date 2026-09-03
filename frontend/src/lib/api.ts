const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

async function fetcher<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

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

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

interface ProductDetailResponse {
  product: Product;
  relatedProducts: Product[];
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

export const api = {
  products: {
    async list(params?: {
      search?: string;
      category?: string;
      sourceMarket?: string;
      page?: number;
      limit?: number;
    }): Promise<ProductsResponse> {
      const searchParams = new URLSearchParams();
      if (params?.search) searchParams.set("search", params.search);
      if (params?.category) searchParams.set("category", params.category);
      if (params?.sourceMarket)
        searchParams.set("sourceMarket", params.sourceMarket);
      if (params?.page) searchParams.set("page", String(params.page));
      if (params?.limit) searchParams.set("limit", String(params.limit));
      const qs = searchParams.toString();
      const res = await fetcher<ApiResponse<Product[]> & { meta: { page: number; limit: number; total: number } }>(`/products${qs ? `?${qs}` : ""}`);
      return { data: res.data, total: res.meta.total, page: res.meta.page, limit: res.meta.limit };
    },
    async get(slug: string): Promise<Product> {
      const res = await fetcher<ApiResponse<ProductDetailResponse>>(`/products/${slug}`);
      const product = res.data.product;
      product.relatedProducts = res.data.relatedProducts;
      return product;
    },
  },
  inquiries: {
    create(data: InquiryPayload) {
      return fetcher("/inquiries", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
  },
  suppliers: {
    create(data: SupplierPayload) {
      return fetcher("/suppliers", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
  },
  contact: {
    create(data: ContactPayload) {
      return fetcher("/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
  },
};
