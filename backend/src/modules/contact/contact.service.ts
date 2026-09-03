import { Injectable } from '@nestjs/common';
import type { CreateContactDto } from './dto/create-contact.dto.js';

export interface ContactMessage extends CreateContactDto {
  id: string;
  createdAt: Date;
}

@Injectable()
export class ContactService {
  private readonly messages: ContactMessage[] = [];
  private counter = 0;

  create(dto: CreateContactDto): ContactMessage {
    this.counter++;
    const message: ContactMessage = {
      ...dto,
      id: `MSG-${String(this.counter).padStart(6, '0')}`,
      createdAt: new Date(),
    };

    this.messages.push(message);

    console.log('--- New Contact Message ---');
    console.log(`ID: ${message.id}`);
    console.log(`Name: ${message.name}`);
    console.log(`Email: ${message.email}`);
    console.log(`Company: ${message.company ?? 'N/A'}`);
    console.log(`Subject: ${message.subject}`);
    console.log(`Message: ${message.message}`);
    console.log(`Date: ${message.createdAt.toISOString()}`);
    console.log('---------------------------');

    return message;
  }
}
