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
  async findOne(id: string): Promise<Product> {
    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  // Yeni bir ürün eklemek için
  async create(product: Product): Promise<Product> {
    console.log("product", product);
    return this.productsRepository.save(product);
  }

  // Belirli bir ürünü güncellemek için
  async update(id: string, product: Partial<Product>): Promise<Product> {
    const existingProduct = await this.findOne(id);

    if (!existingProduct) {
      throw new Error('Product not found');
    }

    // Verilen product data ile güncellemeyi yap
    Object.assign(existingProduct, product);

    return this.productsRepository.save(existingProduct);
  }

  // Belirli bir ürünü silmek için
  async remove(id: string): Promise<void> {
    const product = await this.findOne(id);
    if (!product) {
      throw new Error('Product not found');
    }
    await this.productsRepository.delete(id);
  }
}
