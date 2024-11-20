import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  private orders = []; // Basit bir array ile simülasyon yapıyoruz

  // Yeni sipariş oluşturma
  async createOrder(createOrderDto: CreateOrderDto) {
    const newOrder = { id: Date.now().toString(), ...createOrderDto };
    this.orders.push(newOrder);
    return { message: 'Order created successfully', data: newOrder };
  }

  // Tüm siparişleri listeleme
  async getAllOrders() {
    return { data: this.orders };
  }

  // ID'ye göre bir sipariş alma
  async getOrderById(id: string) {
    const order = this.orders.find(order => order.id === id);
    if (!order) {
      return { message: 'Order not found', statusCode: 404 };
    }
    return { data: order };
  }

  // Siparişi güncelleme
  async updateOrder(id: string, updateOrderDto: UpdateOrderDto) {
    let order = this.orders.find(order => order.id === id);
    if (!order) {
      return { message: 'Order not found', statusCode: 404 };
    }
    order = { ...order, ...updateOrderDto };
    return { message: 'Order updated successfully', data: order };
  }

  // Siparişi silme
  async deleteOrder(id: string) {
    const index = this.orders.findIndex(order => order.id === id);
    if (index === -1) {
      return { message: 'Order not found', statusCode: 404 };
    }
    this.orders.splice(index, 1);
    return { message: 'Order deleted successfully' };
  }
}
