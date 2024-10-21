import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity'; // Product entity'sini içe aktarın

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Tüm ürünleri almak için
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  // Belirli bir ürünü almak için
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  // Yeni bir ürün eklemek için
  @Post()
  async create(@Body() product: Product): Promise<Product> {
    
    return this.productsService.create(product);
  }

  // Belirli bir ürünü güncellemek için
  @Put(':id')
  async update(@Param('id') id: string, @Body() product: Product): Promise<Product> {
    return this.productsService.update( id, product );
  }

  // Belirli bir ürünü silmek için
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(id);
  }
}
