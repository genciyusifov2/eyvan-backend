import { IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// kateqoriya: category,
// mehsulun_adi: productName,
// mayaDeyeri: costPrice,
// satisQiymeti: salePrice,
import  {v4 as uuidv4} from "uuid"
@Entity("product")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({type:"varchar"})
  mehsulun_adi:string;

  @Column({type:"varchar"})
  kateqoriya:string;

  @Column({type:"varchar"})
  mayaDeyeri:string;

  @Column({type:"varchar"})
  satisQiymeti:string;

  constructor(product:Product){
    if(product){
      this.id=this.generateId()
      Object.assign(this,product)
    }
  }
  generateId(){
    return uuidv4()
  }
}
