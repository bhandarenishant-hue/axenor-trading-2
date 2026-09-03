import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './modules/products/products.module.js';
import { InquiriesModule } from './modules/inquiries/inquiries.module.js';
import { SuppliersModule } from './modules/suppliers/suppliers.module.js';
import { ContactModule } from './modules/contact/contact.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductsModule,
    InquiriesModule,
    SuppliersModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
