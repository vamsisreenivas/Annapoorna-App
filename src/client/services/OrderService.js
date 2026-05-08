export class OrderService {
  constructor() {
    this.orderTableName = "x_400063_annapoorn_order";
    this.orderItemTableName = "x_400063_annapoorn_order_item";
  }

  async createOrder(orderData) {
    try {
      const response = await fetch(`/api/now/table/${this.orderTableName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
        body: JSON.stringify(orderData),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to create order');
      }
      
      return response.json();
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }

  async addOrderItem(orderItemData) {
    try {
      const response = await fetch(`/api/now/table/${this.orderItemTableName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
        body: JSON.stringify(orderItemData),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to add order item');
      }
      
      return response.json();
    } catch (error) {
      console.error('Error adding order item:', error);
      throw error;
    }
  }

  async getOrders(filters = {}) {
    try {
      const searchParams = new URLSearchParams(filters);
      searchParams.set('sysparm_display_value', 'all');
      searchParams.set('sysparm_limit', '50');
      searchParams.set('sysparm_query', 'ORDERBYDESCsys_created_on');
      
      const response = await fetch(`/api/now/table/${this.orderTableName}?${searchParams.toString()}`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to fetch orders');
      }
      
      const { result } = await response.json();
      return result || [];
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  }

  async getOrderItems(orderId) {
    try {
      const searchParams = new URLSearchParams();
      searchParams.set('sysparm_display_value', 'all');
      searchParams.set('sysparm_query', `order=${orderId}`);
      
      const response = await fetch(`/api/now/table/${this.orderItemTableName}?${searchParams.toString()}`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to fetch order items');
      }
      
      const { result } = await response.json();
      return result || [];
    } catch (error) {
      console.error('Error fetching order items:', error);
      throw error;
    }
  }

  async updateOrderStatus(orderId, status) {
    try {
      const response = await fetch(`/api/now/table/${this.orderTableName}/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to update order status');
      }
      
      return response.json();
    } catch (error) {
      console.error('Error updating order status:', error);
      throw error;
    }
  }
}