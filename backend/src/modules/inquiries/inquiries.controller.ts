import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { InquiriesService } from './inquiries.service.js';
import { CreateInquiryDto } from './dto/create-inquiry.dto.js';
import type { ApiResponse } from '../../common/interfaces/api-response.interface.js';

@Controller('inquiries')
export class InquiriesController {
  constructor(private readonly inquiriesService: InquiriesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateInquiryDto): ApiResponse<{ id: string }> {
    const inquiry = this.inquiriesService.create(dto);
    return {
      success: true,
      message: 'Inquiry submitted successfully. Our team will contact you shortly.',
      data: { id: inquiry.id },
    };
  }
}
