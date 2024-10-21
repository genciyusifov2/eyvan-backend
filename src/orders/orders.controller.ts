import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // Create a new order
  @Post()
  create(@Body() orderDto: any) {
    return this.ordersService.createOrder(orderDto);
  }

  // Get all orders
  @Get()
  findAll() {
    return this.ordersService.getAllOrders();
  }

  // Get a specific order by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.getOrderById(+id); // Convert string to number
  }

  // Update an existing order by ID
  @Put(':id')
  update(@Param('id') id: string, @Body() orderDto: any) {
    return this.ordersService.updateOrder(+id, orderDto); // Convert string to number
  }

  // Delete an order by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.deleteOrder(+id); // Convert string to number
  }
}
