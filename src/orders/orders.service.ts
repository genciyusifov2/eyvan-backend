import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  private orders = []; // Temporary array for orders

  getAllOrders() {
    return this.orders;
  }

  getOrderById(id: number) {
    const order = this.orders.find(order => order.id === id);
    if (!order) {
      throw new Error(`Order with ID ${id} not found`); // Error handling
    }
    return order;
  }

  createOrder(createOrderDto: CreateOrderDto) {
    const newOrder = { id: Date.now(), ...createOrderDto };
    this.orders.push(newOrder);
    return newOrder;
  }

  updateOrder(id: number, updateOrderDto: CreateOrderDto) {
    const index = this.orders.findIndex(order => order.id === id);
    if (index !== -1) {
      this.orders[index] = { ...this.orders[index], ...updateOrderDto };
      return this.orders[index];
    }
    throw new Error(`Order with ID ${id} not found`); // Error handling
  }

  deleteOrder(id: number) {
    const index = this.orders.findIndex(order => order.id === id);
    if (index === -1) {
      throw new Error(`Order with ID ${id} not found`); // Error handling
    }
    this.orders.splice(index, 1);
    return { message: 'Order deleted successfully' };
  }
}
