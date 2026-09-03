import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ContactService } from './contact.service.js';
import { CreateContactDto } from './dto/create-contact.dto.js';
import type { ApiResponse } from '../../common/interfaces/api-response.interface.js';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateContactDto): ApiResponse<{ id: string }> {
    const message = this.contactService.create(dto);
    return {
      success: true,
      message: 'Your message has been received. We will get back to you soon.',
      data: { id: message.id },
    };
  }
}
