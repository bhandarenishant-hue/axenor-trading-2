import { Injectable } from '@nestjs/common';
import type { CreateInquiryDto } from './dto/create-inquiry.dto.js';

export interface Inquiry extends CreateInquiryDto {
  id: string;
  createdAt: Date;
}

@Injectable()
export class InquiriesService {
  private readonly inquiries: Inquiry[] = [];
  private counter = 0;

  create(dto: CreateInquiryDto): Inquiry {
    this.counter++;
    const inquiry: Inquiry = {
      ...dto,
      id: `INQ-${String(this.counter).padStart(6, '0')}`,
      createdAt: new Date(),
    };

    this.inquiries.push(inquiry);

    console.log('--- New Inquiry Received ---');
    console.log(`ID: ${inquiry.id}`);
    console.log(`Name: ${inquiry.name}`);
    console.log(`Company: ${inquiry.company}`);
    console.log(`Email: ${inquiry.email}`);
    console.log(`Product: ${inquiry.product ?? 'General inquiry'}`);
    console.log(`Quantity: ${inquiry.quantity}`);
    console.log(`Country: ${inquiry.country}`);
    console.log(`Message: ${inquiry.message}`);
    console.log(`Date: ${inquiry.createdAt.toISOString()}`);
    console.log('----------------------------');

    return inquiry;
  }
}
