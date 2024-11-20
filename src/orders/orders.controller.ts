import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // POST: Yeni sipariş oluşturma
  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return await this.ordersService.createOrder(createOrderDto);
  }

  // GET: Tüm siparişleri listeleme
  @Get()
  async getAllOrders() {
    return await this.ordersService.getAllOrders();
  }

  // GET: ID'ye göre bir sipariş alma
  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    return await this.ordersService.getOrderById(id);
  }

  // PUT: Siparişi güncelleme
  @Put(':id')
  async updateOrder(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return await this.ordersService.updateOrder(id, updateOrderDto);
  }

  // DELETE: Siparişi silme
  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    return await this.ordersService.deleteOrder(id);
  }
}
