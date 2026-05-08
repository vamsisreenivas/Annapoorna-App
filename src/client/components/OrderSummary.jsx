import React from 'react';
import './OrderSummary.css';

export default function OrderSummary({
  currentOrder,
  orderDetails,
  onUpdateOrderDetails,
  onUpdateOrderItem,
  onRemoveFromOrder,
  onClearOrder,
  onSubmitOrder,
  total,
  loading
}) {

  const formatPrice = (price) => {
    return `₹${parseFloat(price).toFixed(2)}`;
  };

  const handleOrderDetailsChange = (field, value) => {
    onUpdateOrderDetails({
      ...orderDetails,
      [field]: value
    });
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 1) {
      onUpdateOrderItem(index, { quantity: newQuantity });
    }
  };

  const handleSpecialInstructions = (index, instructions) => {
    onUpdateOrderItem(index, { specialInstructions: instructions });
  };

  return (
    <div className="order-summary">
      <h2 className="order-title">🛒 Current Order</h2>

      {/* Order Type Selection */}
      <div className="order-type-section">
        <label className="section-label">Order Type:</label>
        <div className="order-type-buttons">
          {[
            { value: 'dine_in', label: '🍽️ Dine In' },
            { value: 'takeaway', label: '📦 Takeaway' },
            { value: 'delivery', label: '🚚 Delivery' }
          ].map(type => (
            <button
              key={type.value}
              className={orderDetails.orderType === type.value ? 'order-type-btn active' : 'order-type-btn'}
              onClick={() => handleOrderDetailsChange('orderType', type.value)}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table Number (for dine-in) */}
      {orderDetails.orderType === 'dine_in' && (
        <div className="form-group">
          <label className="section-label">Table Number:</label>
          <input
            type="number"
            value={orderDetails.tableNumber}
            onChange={(e) => handleOrderDetailsChange('tableNumber', e.target.value)}
            placeholder="Enter table number"
            className="form-input"
            min="1"
            max="50"
          />
        </div>
      )}

      {/* Order Notes */}
      <div className="form-group">
        <label className="section-label">Order Notes:</label>
        <textarea
          value={orderDetails.notes}
          onChange={(e) => handleOrderDetailsChange('notes', e.target.value)}
          placeholder="Any special requests..."
          className="form-textarea"
          rows="2"
        />
      </div>

      {/* Order Items */}
      <div className="order-items-section">
        <h3 className="items-title">Order Items ({currentOrder.length})</h3>
        
        {currentOrder.length === 0 ? (
          <div className="empty-order">
            <p>No items in order</p>
            <p>Select items from the menu to get started!</p>
          </div>
        ) : (
          <div className="order-items">
            {currentOrder.map((item, index) => {
              const name = typeof item.menuItem.name === 'object' ? 
                item.menuItem.name.display_value : 
                item.menuItem.name;
              const vegetarian = typeof item.menuItem.vegetarian === 'object' ? 
                item.menuItem.vegetarian.value === 'true' : 
                item.menuItem.vegetarian;

              return (
                <div key={index} className="order-item">
                  <div className="item-info">
                    <div className="item-name-row">
                      <span className="item-name">{name}</span>
                      {vegetarian && <span className="veg-indicator">🌱</span>}
                    </div>
                    <div className="item-price-row">
                      <span className="unit-price">{formatPrice(item.unitPrice)} each</span>
                    </div>
                  </div>

                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(index, item.quantity - 1)}
                    >
                      ➖
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(index, item.quantity + 1)}
                    >
                      ➕
                    </button>
                  </div>

                  <div className="item-total">
                    {formatPrice(item.lineTotal)}
                  </div>

                  <button 
                    className="remove-btn"
                    onClick={() => onRemoveFromOrder(index)}
                    title="Remove item"
                  >
                    🗑️
                  </button>

                  {/* Special Instructions */}
                  <div className="special-instructions">
                    <input
                      type="text"
                      placeholder="Special instructions..."
                      value={item.specialInstructions}
                      onChange={(e) => handleSpecialInstructions(index, e.target.value)}
                      className="instructions-input"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Order Total */}
      {currentOrder.length > 0 && (
        <div className="order-total-section">
          <div className="subtotal-row">
            <span>Subtotal:</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="tax-row">
            <span>GST (18%):</span>
            <span>{formatPrice(total * 0.18)}</span>
          </div>
          <div className="total-row">
            <span>Total:</span>
            <span>{formatPrice(total * 1.18)}</span>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="action-buttons">
        {currentOrder.length > 0 && (
          <button 
            className="clear-btn"
            onClick={onClearOrder}
            disabled={loading}
          >
            🗑️ Clear Order
          </button>
        )}
        
        <button 
          className="submit-btn"
          onClick={onSubmitOrder}
          disabled={currentOrder.length === 0 || loading}
        >
          {loading ? '⏳ Submitting...' : '✅ Submit Order'}
        </button>
      </div>
    </div>
  );
}