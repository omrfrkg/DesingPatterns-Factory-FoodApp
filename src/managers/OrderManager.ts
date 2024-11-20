import { IFood } from '../models/Food';

export interface IOrder {
    id: string;
    items: IFood[];
    totalPrice: number;
    orderDate: Date;
}

export class OrderManager {
    private orders: IOrder[] = [];

    createOrder(items: IFood[]): IOrder {
        const order: IOrder = {
            id: Math.random().toString(36).substr(2, 9),
            items,
            totalPrice: items.reduce((total, item) => total + item.calculatePrice(), 0),
            orderDate: new Date()
        };

        this.orders.push(order);
        return order;
    }

    getOrders(): IOrder[] {
        return [...this.orders];
    }

    getOrder(id: string): IOrder | undefined {
        return this.orders.find(order => order.id === id);
    }

    calculateTotalPrice(items: IFood[]): number {
        return items.reduce((total, item) => total + item.calculatePrice(), 0);
    }

    calculateTotalPrepTime(items: IFood[]): number {
        // En uzun hazırlama süresine sahip ürünün süresini alıyoruz
        // Çünkü mutfak siparişleri paralel hazırlayabilir
        return items.length > 0 ? Math.max(...items.map(item => item.prepTime)) : 0;
    }
}
