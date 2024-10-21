import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('settings') // Veritabanında tablo adı 'settings' olacak
export class Settings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  adminPassword: string;
}
