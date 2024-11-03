import { IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("product")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  mehsulun_adi: string;

  @Column({ type: "varchar" })
  kateqoriya: string;

  @Column({ type: "varchar" })
  mayaDeyeri: string;

  @Column({ type: "varchar" })
  satisQiymeti: string;

  // Yeni stocSayisi sütunu
  @Column({ type: "int", default: 0 })
  stokMiqdari: number;

  constructor(product: Partial<Product>) {
    if (product) {
      Object.assign(this, product);
    }
  }
}
