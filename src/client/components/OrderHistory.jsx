import React, { useState, useEffect } from 'react';

export default function OrderHistory({ orderService }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const orderList = await orderService.getOrders();
      setOrders(orderList);
      setError(null);
    } catch (err) {
      setError('Failed to load orders');
      console.error('Error loading orders:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (orderId, newStatus) => {
    try {
      await orderService.updateOrderStatus(orderId, newStatus);
      await loadOrders(); // Refresh the list
    } catch (err) {
      setError('Failed to update order status');
      console.error('Error updating status:', err);
    }
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString();
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: '#ffc107',
      confirmed: '#17a2b8',
      preparing: '#fd7e14',
      ready: '#28a745',
      served: '#6f42c1',
      completed: '#28a745',
      cancelled: '#dc3545'
    };
    return colors[status] || '#6c757d';
  };

  if (loading) return <div className="loading">Loading orders...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>📊 Order History</h2>
      
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {orders.map(order => {
            const orderNumber = typeof order.order_number === 'object' ? 
              order.order_number.display_value : 
              order.order_number;
            const status = typeof order.status === 'object' ? 
              order.status.value : 
              order.status;
            const orderDate = typeof order.order_date === 'object' ? 
              order.order_date.display_value : 
              order.order_date;
            const totalAmount = typeof order.total_amount === 'object' ? 
              order.total_amount.display_value : 
              order.total_amount;
            const orderType = typeof order.order_type === 'object' ? 
              order.order_type.display_value : 
              order.order_type;
            const tableNumber = typeof order.table_number === 'object' ? 
              order.table_number.display_value : 
              order.table_number;

            return (
              <div 
                key={typeof order.sys_id === 'object' ? order.sys_id.value : order.sys_id}
                style={{
                  background: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '1rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h4 style={{ margin: 0, color: '#333' }}>Order #{orderNumber}</h4>
                  <span 
                    style={{ 
                      background: getStatusColor(status), 
                      color: 'white', 
                      padding: '0.25rem 0.5rem', 
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {status?.toUpperCase()}
                  </span>
                </div>
                
                <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.75rem' }}>
                  <p style={{ margin: '0.25rem 0' }}>📅 {formatDateTime(orderDate)}</p>
                  <p style={{ margin: '0.25rem 0' }}>🍽️ {orderType?.replace('_', ' ')}</p>
                  {tableNumber && <p style={{ margin: '0.25rem 0' }}>🪑 Table {tableNumber}</p>}
                  <p style={{ margin: '0.25rem 0', fontWeight: 'bold', color: '#ff6b35' }}>
                    💰 Total: ₹{parseFloat(totalAmount || 0).toFixed(2)}
                  </p>
                </div>

                {status !== 'completed' && status !== 'cancelled' && (
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {status === 'pending' && (
                      <button 
                        onClick={() => updateStatus(typeof order.sys_id === 'object' ? order.sys_id.value : order.sys_id, 'confirmed')}
                        style={{ background: '#17a2b8', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
                      >
                        ✅ Confirm
                      </button>
                    )}
                    {status === 'confirmed' && (
                      <button 
                        onClick={() => updateStatus(typeof order.sys_id === 'object' ? order.sys_id.value : order.sys_id, 'preparing')}
                        style={{ background: '#fd7e14', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
                      >
                        👨‍🍳 Start Preparing
                      </button>
                    )}
                    {status === 'preparing' && (
                      <button 
                        onClick={() => updateStatus(typeof order.sys_id === 'object' ? order.sys_id.value : order.sys_id, 'ready')}
                        style={{ background: '#28a745', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
                      >
                        🔔 Ready
                      </button>
                    )}
                    {status === 'ready' && (
                      <button 
                        onClick={() => updateStatus(typeof order.sys_id === 'object' ? order.sys_id.value : order.sys_id, 'served')}
                        style={{ background: '#6f42c1', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
                      >
                        🍽️ Served
                      </button>
                    )}
                    {status === 'served' && (
                      <button 
                        onClick={() => updateStatus(typeof order.sys_id === 'object' ? order.sys_id.value : order.sys_id, 'completed')}
                        style={{ background: '#28a745', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
                      >
                        ✨ Complete
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}