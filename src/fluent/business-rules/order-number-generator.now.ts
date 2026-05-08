import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { generateOrderNumber } from '../../server/business-rules/order-number-generator.js'

BusinessRule({
    $id: Now.ID['order_number_generator'],
    name: 'Generate Order Number',
    table: 'x_400063_annapoorn_order',
    when: 'before',
    action: ['insert'],
    script: generateOrderNumber,
    order: 100,
    active: true,
    description: 'Automatically generates unique order numbers for new orders'
})