import { IsString, IsArray, IsNumber, IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @IsArray()
  readonly product?: any[];

  @IsOptional()
  @IsString()
  readonly driver?: string;

  @IsOptional()
  @IsString()
  readonly worker?: string;

  @IsOptional()
  @IsNumber()
  readonly discount?: number;

  @IsOptional()
  @IsString()
  readonly customerName?: string;

  @IsOptional()
  @IsString()
  readonly location?: string;

  @IsOptional()
  @IsString()
  readonly phone?: string;

  @IsOptional()
  @IsString()
  readonly orderDate?: string;

  @IsOptional()
  @IsString()
  readonly orderTime?: string;

  @IsOptional()
  @IsNumber()
  readonly satisQiymeti?: number;

  @IsOptional()
  @IsNumber()
  readonly endirimliQiymet?: number;
}
