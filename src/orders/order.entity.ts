// src/orders/order.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  product: Array<{
    id: string;
    category: string;
    productName: string;
    price: number;
    quantity: number;
  }>;

  @Column()
  driver: string;

  @Column()
  worker: string;

  @Column({ type: 'decimal', nullable: true })
  discount: number;

  @Column()
  customerName: string;

  @Column()
  location: string;

  @Column()
  phone: string;

  @Column({ type: 'date' })
  orderDate: string;

  @Column({ type: 'time' })
  orderTime: string;

  @Column({ type: 'decimal' })
  satisQiymeti: number;

  @Column({ type: 'decimal' })
  endirimliQiymet: number;
}
