import { IsString, IsArray, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsArray()
  readonly product: any[];

  @IsString()
  readonly driver: string;

  @IsString()
  readonly worker: string;

  @IsNumber()
  readonly discount: number;

  @IsString()
  readonly customerName: string;

  @IsString()
  readonly location: string;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly orderDate: string;

  @IsString()
  readonly orderTime: string;

  @IsNumber()
  readonly satisQiymeti: number;

  @IsNumber()
  readonly endirimliQiymet: number;
}
