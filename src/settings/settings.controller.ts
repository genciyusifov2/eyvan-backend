import { Controller, Get, Post, Put, Delete, Param, Body, BadRequestException } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { Settings } from './settings.entity';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  getAllSettings() {
    return this.settingsService.findAll();
  }

  @Get(':id')
  getSettingsById(@Param('id') id: number) {
    return this.settingsService.findOne(id);
  }

  @Post()
  createSettings(@Body() settings: Settings) {
    if (settings.adminPassword !== this.settingsService.getAdminPassword()) {
      throw new BadRequestException('Admin parolası değiştirilemez!');
    }
    return this.settingsService.create(settings);
  }

  @Put(':id')
  updateSettings(@Param('id') id: number, @Body() updatedSettings: Partial<Settings>) {
    if (updatedSettings.adminPassword && updatedSettings.adminPassword !== this.settingsService.getAdminPassword()) {
      throw new BadRequestException('Admin parolası değiştirilemez!');
    }
    return this.settingsService.update(id, updatedSettings);
  }

  @Delete(':id')
  deleteSettings(@Param('id') id: number) {
    return this.settingsService.delete(id);
  }
}
