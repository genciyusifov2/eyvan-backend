import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';
import { dataSource } from './typeorm.config';
import { PersonsModule } from './persons/persons.module';
import { Person } from './persons/person.entity'; // Person entity'sini ekleyin
import { SettingsModule } from './settings/settings.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      async useFactory() {
        try {
          const options = {
            ...dataSource.options,
            entities: [Product, Person], // Product ve Person entity'lerini tanımlayın
          };

          if (!dataSource.isInitialized) {
            await dataSource.initialize();
            console.log('Veritabanı bağlantısı başarıyla kuruldu');
          }

          return options;
        } catch (error) {
          console.error('Veritabanı bağlantısı kurulurken hata oluştu:', error);
          throw error;
        }
      },
    }),
    ProductsModule,
    PersonsModule,
    SettingsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
