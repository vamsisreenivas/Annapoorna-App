import '@servicenow/sdk/global'
import { Table, ReferenceColumn, IntegerColumn, DecimalColumn, StringColumn } from '@servicenow/sdk/core'

export const x_400063_annapoorn_order_item = Table({
    name: 'x_400063_annapoorn_order_item',
    label: 'Order Item',
    schema: {
        order: ReferenceColumn({ 
            label: 'Order',
            referenceTable: 'x_400063_annapoorn_order',
            mandatory: true
        }),
        menu_item: ReferenceColumn({ 
            label: 'Menu Item',
            referenceTable: 'x_400063_annapoorn_menu_item',
            mandatory: true
        }),
        quantity: IntegerColumn({
            label: 'Quantity',
            mandatory: true,
            min: 1,
            default: '1'
        }),
        unit_price: DecimalColumn({
            label: 'Unit Price',
            mandatory: true
        }),
        line_total: DecimalColumn({
            label: 'Line Total',
            read_only: true
        }),
        special_instructions: StringColumn({ 
            label: 'Special Instructions', 
            maxLength: 500 
        })
    },
    display: 'menu_item',
    extensible: false,
    allow_web_service_access: true,
    actions: ['create', 'read', 'update', 'delete']
})