import { gs, GlideRecord } from '@servicenow/glide'

export function calculateOrderItemTotal(current) {
    // Calculate line total = quantity * unit_price
    const quantity = current.getValue('quantity') || 0
    const unitPrice = current.getValue('unit_price') || 0
    const lineTotal = parseFloat(quantity) * parseFloat(unitPrice)
    
    current.setValue('line_total', lineTotal.toFixed(2))
}

export function updateOrderTotal(current) {
    const orderId = current.getValue('order')
    
    if (gs.nil(orderId)) {
        return
    }
    
    // Calculate total for the order by summing all order items
    const orderItems = new GlideRecord('x_400063_annapoorn_order_item')
    orderItems.addQuery('order', orderId)
    orderItems.query()
    
    let totalAmount = 0
    while (orderItems.next()) {
        const lineTotal = parseFloat(orderItems.getValue('line_total') || 0)
        totalAmount += lineTotal
    }
    
    // Update the order total
    const order = new GlideRecord('x_400063_annapoorn_order')
    if (order.get(orderId)) {
        order.setValue('total_amount', totalAmount.toFixed(2))
        order.update()
    }
}