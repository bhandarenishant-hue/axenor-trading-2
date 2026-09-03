import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class ProductQueryDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  sourceMarket?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 12;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  sourceMarket: 'india' | 'china';
  description: string;
  highlights: string[];
  specifications: Record<string, string>;
  image: string;
  relatedProductSlugs: string[];
}
