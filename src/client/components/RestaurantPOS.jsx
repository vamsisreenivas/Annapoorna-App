import React, { useState, useEffect, useMemo } from 'react';
import { MenuService } from '../services/MenuService.js';
import { OrderService } from '../services/OrderService.js';
import MenuGrid from './MenuGrid.jsx';
import OrderSummary from './OrderSummary.jsx';
import OrderHistory from './OrderHistory.jsx';
import './RestaurantPOS.css';

export default function RestaurantPOS() {
  const [activeTab, setActiveTab] = useState('menu');
  const [menuItems, setMenuItems] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    orderType: 'dine_in',
    tableNumber: '',
    notes: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const menuService = useMemo(() => new MenuService(), []);
  const orderService = useMemo(() => new OrderService(), []);

  useEffect(() => {
    loadMenuItems();
  }, []);

  const loadMenuItems = async () => {
    try {
      setLoading(true);
      const items = await menuService.getMenuItems();
      setMenuItems(items);
      setError(null);
    } catch (err) {
      setError('Failed to load menu items');
      console.error('Error loading menu:', err);
    } finally {
      setLoading(false);
    }
  };

  const addToOrder = (menuItem) => {
    const price = typeof menuItem.price === 'object' ? 
      parseFloat(menuItem.price.value) : 
      parseFloat(menuItem.price);
    
    const existingItemIndex = currentOrder.findIndex(
      item => (typeof item.menuItem.sys_id === 'object' ? 
        item.menuItem.sys_id.value : 
        item.menuItem.sys_id) === 
        (typeof menuItem.sys_id === 'object' ? 
          menuItem.sys_id.value : 
          menuItem.sys_id)
    );

    if (existingItemIndex >= 0) {
      const newOrder = [...currentOrder];
      newOrder[existingItemIndex].quantity += 1;
      newOrder[existingItemIndex].lineTotal = newOrder[existingItemIndex].quantity * price;
      setCurrentOrder(newOrder);
    } else {
      setCurrentOrder([...currentOrder, {
        menuItem,
        quantity: 1,
        unitPrice: price,
        lineTotal: price,
        specialInstructions: ''
      }]);
    }
  };

  const updateOrderItem = (index, updates) => {
    const newOrder = [...currentOrder];
    newOrder[index] = { ...newOrder[index], ...updates };
    if (updates.quantity !== undefined) {
      newOrder[index].lineTotal = newOrder[index].quantity * newOrder[index].unitPrice;
    }
    setCurrentOrder(newOrder);
  };

  const removeFromOrder = (index) => {
    const newOrder = currentOrder.filter((_, i) => i !== index);
    setCurrentOrder(newOrder);
  };

  const clearOrder = () => {
    setCurrentOrder([]);
    setOrderDetails({
      orderType: 'dine_in',
      tableNumber: '',
      notes: ''
    });
  };

  const calculateTotal = () => {
    return currentOrder.reduce((sum, item) => sum + item.lineTotal, 0);
  };

  const submitOrder = async () => {
    if (currentOrder.length === 0) {
      alert('Please add items to the order');
      return;
    }

    if (orderDetails.orderType === 'dine_in' && !orderDetails.tableNumber) {
      alert('Please enter table number for dine-in orders');
      return;
    }

    try {
      setLoading(true);
      
      const orderData = {
        order_type: orderDetails.orderType,
        table_number: orderDetails.tableNumber || null,
        notes: orderDetails.notes,
        status: 'pending'
      };

      const orderResponse = await orderService.createOrder(orderData);
      const orderId = orderResponse.result.sys_id;

      for (const item of currentOrder) {
        const menuItemId = typeof item.menuItem.sys_id === 'object' ? 
          item.menuItem.sys_id.value : 
          item.menuItem.sys_id;

        await orderService.addOrderItem({
          order: orderId,
          menu_item: menuItemId,
          quantity: item.quantity,
          unit_price: item.unitPrice,
          special_instructions: item.specialInstructions
        });
      }

      alert('Order submitted successfully!');
      clearOrder();
    } catch (err) {
      setError('Failed to submit order');
      console.error('Error submitting order:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading && menuItems.length === 0) {
    return <div className="loading">Loading Annapoorna POS...</div>;
  }

  return (
    <div className="restaurant-pos">
      <header className="pos-header">
        <h1>🍽️ Annapoorna Restaurant POS</h1>
        <nav className="tab-navigation">
          <button 
            className={activeTab === 'menu' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('menu')}
          >
            📋 Menu
          </button>
          <button 
            className={activeTab === 'orders' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('orders')}
          >
            📊 Orders
          </button>
        </nav>
      </header>

      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError(null)}>✕</button>
        </div>
      )}

      <main className="pos-main">
        {activeTab === 'menu' ? (
          <div className="menu-layout">
            <div className="menu-section">
              <MenuGrid 
                menuItems={menuItems}
                onAddToOrder={addToOrder}
                loading={loading}
              />
            </div>
            <div className="order-section">
              <OrderSummary
                currentOrder={currentOrder}
                orderDetails={orderDetails}
                onUpdateOrderDetails={setOrderDetails}
                onUpdateOrderItem={updateOrderItem}
                onRemoveFromOrder={removeFromOrder}
                onClearOrder={clearOrder}
                onSubmitOrder={submitOrder}
                total={calculateTotal()}
                loading={loading}
              />
            </div>
          </div>
        ) : (
          <OrderHistory orderService={orderService} />
        )}
      </main>
    </div>
  );
}