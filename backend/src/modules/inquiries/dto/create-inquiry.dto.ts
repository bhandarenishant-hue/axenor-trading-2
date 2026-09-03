import {
  IsString,
  IsEmail,
  IsOptional,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

export class CreateInquiryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  company: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  country: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  product?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  quantity: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  message: string;
}
