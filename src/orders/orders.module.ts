import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
    controllers:[OrdersController],
    providers:[OrdersService]
})
export class OrdersModule {
   
}
