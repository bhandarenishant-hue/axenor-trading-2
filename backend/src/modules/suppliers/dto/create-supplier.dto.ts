import {
  IsString,
  IsEmail,
  IsOptional,
  IsNotEmpty,
  IsArray,
  MaxLength,
  IsUrl,
} from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  companyName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  contactPerson: string;

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

  @IsArray()
  @IsString({ each: true })
  productCategories: string[];

  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  description: string;

  @IsOptional()
  @IsUrl()
  @MaxLength(500)
  website?: string;
}
