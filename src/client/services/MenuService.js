export class MenuService {
  constructor() {
    this.tableName = "x_400063_annapoorn_menu_item";
  }

  async getMenuItems(filters = {}) {
    try {
      const searchParams = new URLSearchParams(filters);
      searchParams.set('sysparm_display_value', 'all');
      searchParams.set('sysparm_limit', '100');
      
      const response = await fetch(`/api/now/table/${this.tableName}?${searchParams.toString()}`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to fetch menu items');
      }
      
      const { result } = await response.json();
      return result || [];
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw error;
    }
  }

  async getMenuItemsByCategory(category) {
    return this.getMenuItems({ category });
  }

  async updateMenuItem(sysId, data) {
    try {
      const response = await fetch(`/api/now/table/${this.tableName}/${sysId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to update menu item');
      }
      
      return response.json();
    } catch (error) {
      console.error('Error updating menu item:', error);
      throw error;
    }
  }
}