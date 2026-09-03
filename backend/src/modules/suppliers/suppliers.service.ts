import { Injectable } from '@nestjs/common';
import type { CreateSupplierDto } from './dto/create-supplier.dto.js';

export interface Supplier extends CreateSupplierDto {
  id: string;
  createdAt: Date;
}

@Injectable()
export class SuppliersService {
  private readonly suppliers: Supplier[] = [];
  private counter = 0;

  create(dto: CreateSupplierDto): Supplier {
    this.counter++;
    const supplier: Supplier = {
      ...dto,
      id: `SUP-${String(this.counter).padStart(6, '0')}`,
      createdAt: new Date(),
    };

    this.suppliers.push(supplier);

    console.log('--- New Supplier Registration ---');
    console.log(`ID: ${supplier.id}`);
    console.log(`Company: ${supplier.companyName}`);
    console.log(`Contact: ${supplier.contactPerson}`);
    console.log(`Email: ${supplier.email}`);
    console.log(`Country: ${supplier.country}`);
    console.log(`Categories: ${supplier.productCategories.join(', ')}`);
    console.log(`Website: ${supplier.website ?? 'N/A'}`);
    console.log(`Date: ${supplier.createdAt.toISOString()}`);
    console.log('--------------------------------');

    return supplier;
  }
}
