import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity'; // Product entity'sini içe aktarın

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  // Tüm ürünleri almak için
  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  // Belirli bir ürünü almak için
  findOne(id: string): Promise<Product> {
    return this.productsRepository.findOne({ where : {id} });
  }

  // Yeni bir ürün eklemek için
 async create(product: Product): Promise<Product> {
    console.log("product",product)
    const newProduct= await new Product(product)
    console.log("newProduct",newProduct)

    return this.productsRepository.save(newProduct);
  }

  // Belirli bir ürünü güncellemek için
  async update(id: string, product: Product): Promise<Product> {
    await this.productsRepository.update(id, product);
    return this.findOne(id);
  }

  // Belirli bir ürünü silmek için
  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
