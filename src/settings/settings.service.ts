import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Settings } from './settings.entity';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Settings)
    private settingsRepository: Repository<Settings>,
  ) {}

  // Tüm ayarları getirmek için bir method
  findAll(): Promise<Settings[]> {
    return this.settingsRepository.find();
  }

  // ID ile ayar bulmak için bir method
  findOne(id: number): Promise<Settings> {
    return this.settingsRepository.findOne({ where: { id } });
  }

  // Parolayı sabit 5566 olarak ayarlayalım
  getAdminPassword(): string {
    return '5566'; // Sabit olarak dönecek
  }

  // Yeni ayar oluşturmak için bir method
  create(settings: Settings): Promise<Settings> {
    // Parola her zaman '5566' olacağı için, ayar oluştursa bile parola sabit kalacak
    settings.adminPassword = this.getAdminPassword();
    return this.settingsRepository.save(settings);
  }

  // ID ile ayar güncellemek için bir method
  async update(id: number, updatedSettings: Partial<Settings>): Promise<Settings> {
    // Parolanın sabit olduğunu kontrol ediyoruz
    updatedSettings.adminPassword = this.getAdminPassword();
    await this.settingsRepository.update(id, updatedSettings);
    return this.findOne(id);
  }

  // ID ile ayar silmek için bir method
  async delete(id: number): Promise<void> {
    await this.settingsRepository.delete(id);
  }
}
