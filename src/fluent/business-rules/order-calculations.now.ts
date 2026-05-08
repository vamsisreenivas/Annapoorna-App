import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { calculateOrderItemTotal, updateOrderTotal } from '../../server/business-rules/order-calculations.js'

// Business rule to calculate line total for order items
BusinessRule({
    $id: Now.ID['calculate_order_item_total'],
    name: 'Calculate Order Item Total',
    table: 'x_400063_annapoorn_order_item',
    when: 'before',
    action: ['insert', 'update'],
    script: calculateOrderItemTotal,
    order: 100,
    active: true,
    description: 'Calculates the line total based on quantity and unit price'
})

// Business rule to update order total when order items change
BusinessRule({
    $id: Now.ID['update_order_total'],
    name: 'Update Order Total',
    table: 'x_400063_annapoorn_order_item',
    when: 'after',
    action: ['insert', 'update', 'delete'],
    script: updateOrderTotal,
    order: 200,
    active: true,
    description: 'Updates the total amount on the order when order items are modified'
})