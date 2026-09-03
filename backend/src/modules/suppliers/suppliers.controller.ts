import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { SuppliersService } from './suppliers.service.js';
import { CreateSupplierDto } from './dto/create-supplier.dto.js';
import type { ApiResponse } from '../../common/interfaces/api-response.interface.js';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateSupplierDto): ApiResponse<{ id: string }> {
    const supplier = this.suppliersService.create(dto);
    return {
      success: true,
      message: 'Supplier registration submitted successfully. We will review your application.',
      data: { id: supplier.id },
    };
  }
}
