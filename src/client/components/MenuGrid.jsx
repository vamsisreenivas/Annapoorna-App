import React, { useState, useMemo } from 'react';
import './MenuGrid.css';

export default function MenuGrid({ menuItems, onAddToOrder, loading }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = useMemo(() => {
    const cats = ['all'];
    const uniqueCats = [...new Set(menuItems.map(item => {
      const category = typeof item.category === 'object' ? 
        item.category.value : 
        item.category;
      return category;
    }).filter(Boolean))];
    return [...cats, ...uniqueCats];
  }, [menuItems]);

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const name = typeof item.name === 'object' ? 
        item.name.display_value : 
        item.name;
      const category = typeof item.category === 'object' ? 
        item.category.value : 
        item.category;
      const available = typeof item.available === 'object' ? 
        item.available.value === 'true' : 
        item.available;

      const matchesSearch = name?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
      
      return available && matchesSearch && matchesCategory;
    });
  }, [menuItems, selectedCategory, searchTerm]);

  const getCategoryLabel = (category) => {
    const labels = {
      all: '🍽️ All Items',
      appetizer: '🥗 Appetizers',
      main_course: '🍛 Main Course',
      dessert: '🍰 Desserts',
      beverage: '☕ Beverages',
      snack: '🍿 Snacks'
    };
    return labels[category] || category;
  };

  const formatPrice = (price) => {
    const priceValue = typeof price === 'object' ? 
      parseFloat(price.value) : 
      parseFloat(price);
    return `₹${priceValue.toFixed(2)}`;
  };

  const getSpiceEmoji = (spiceLevel) => {
    const level = typeof spiceLevel === 'object' ? 
      spiceLevel.value : 
      spiceLevel;
    
    const emojis = {
      mild: '🟢',
      medium: '🟡',
      spicy: '🟠',
      extra_spicy: '🔴'
    };
    return emojis[level] || '';
  };

  return (
    <div className="menu-grid-container">
      <div className="menu-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'category-btn active' : 'category-btn'}
              onClick={() => setSelectedCategory(category)}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="loading-grid">Loading menu items...</div>
      ) : (
        <div className="menu-grid">
          {filteredItems.map(item => {
            const name = typeof item.name === 'object' ? 
              item.name.display_value : 
              item.name;
            const description = typeof item.description === 'object' ? 
              item.description.display_value : 
              item.description;
            const imageUrl = typeof item.image_url === 'object' ? 
              item.image_url.display_value : 
              item.image_url;
            const preparationTime = typeof item.preparation_time === 'object' ? 
              item.preparation_time.value : 
              item.preparation_time;
            const vegetarian = typeof item.vegetarian === 'object' ? 
              item.vegetarian.value === 'true' : 
              item.vegetarian;
            const popular = typeof item.popular === 'object' ? 
              item.popular.value === 'true' : 
              item.popular;
            const spiceLevel = typeof item.spice_level === 'object' ? 
              item.spice_level.value : 
              item.spice_level;

            return (
              <div key={typeof item.sys_id === 'object' ? item.sys_id.value : item.sys_id} 
                   className="menu-item-card">
                {popular && <div className="popular-badge">⭐ Popular</div>}
                
                <div className="item-image">
                  {imageUrl ? (
                    <img src={imageUrl} alt={name} onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }} />
                  ) : null}
                  <div className="placeholder-image" style={{ display: imageUrl ? 'none' : 'flex' }}>
                    🍽️
                  </div>
                </div>

                <div className="item-details">
                  <div className="item-header">
                    <h3 className="item-name">{name}</h3>
                    <div className="item-badges">
                      {vegetarian && <span className="veg-badge">🌱</span>}
                      {spiceLevel && <span className="spice-badge">{getSpiceEmoji(spiceLevel)}</span>}
                    </div>
                  </div>
                  
                  <p className="item-description">{description}</p>
                  
                  <div className="item-meta">
                    <span className="prep-time">⏱️ {preparationTime} min</span>
                    <span className="item-price">{formatPrice(item.price)}</span>
                  </div>
                  
                  <button 
                    className="add-to-order-btn"
                    onClick={() => onAddToOrder(item)}
                  >
                    ➕ Add to Order
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!loading && filteredItems.length === 0 && (
        <div className="no-items">
          <p>No items found matching your criteria</p>
        </div>
      )}
    </div>
  );
}