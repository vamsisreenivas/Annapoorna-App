import '@servicenow/sdk/global';
import { UiPage } from '@servicenow/sdk/core';
import restaurantPOSPage from '../../client/index.html';

export const annapoorna_pos = UiPage({
  $id: Now.ID['annapoorna-pos'], 
  endpoint: 'x_400063_annapoorn_pos.do',
  description: 'Annapoorna Restaurant Point of Sale System - Modern interface for taking orders, managing menu, and tracking order status',
  category: 'general',
  html: restaurantPOSPage,
  direct: true
})