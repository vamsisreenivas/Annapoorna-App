import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, DateTimeColumn, IntegerColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_400063_annapoorn_order = Table({
    name: 'x_400063_annapoorn_order',
    label: 'Order',
    schema: {
        order_number: StringColumn({ 
            label: 'Order Number', 
            maxLength: 20,
            mandatory: true,
            read_only: true
        }),
        customer: ReferenceColumn({ 
            label: 'Customer',
            referenceTable: 'x_400063_annapoorn_customer'
        }),
        order_date: DateTimeColumn({ 
            label: 'Order Date',
            mandatory: true,
            default: 'javascript:gs.nowDateTime()'
        }),
        table_number: IntegerColumn({
            label: 'Table Number',
            min: 1,
            max: 50
        }),
        status: StringColumn({
            label: 'Status',
            choices: {
                pending: { label: 'Pending', sequence: 0 },
                confirmed: { label: 'Confirmed', sequence: 1 },
                preparing: { label: 'Preparing', sequence: 2 },
                ready: { label: 'Ready', sequence: 3 },
                served: { label: 'Served', sequence: 4 },
                completed: { label: 'Completed', sequence: 5 },
                cancelled: { label: 'Cancelled', sequence: 6 }
            },
            dropdown: 'dropdown_without_none',
            default: 'pending',
            mandatory: true
        }),
        order_type: StringColumn({
            label: 'Order Type',
            choices: {
                dine_in: { label: 'Dine In', sequence: 0 },
                takeaway: { label: 'Takeaway', sequence: 1 },
                delivery: { label: 'Delivery', sequence: 2 }
            },
            dropdown: 'dropdown_without_none',
            default: 'dine_in',
            mandatory: true
        }),
        total_amount: DecimalColumn({
            label: 'Total Amount',
            read_only: true,
            default: '0.00'
        }),
        notes: StringColumn({ 
            label: 'Order Notes', 
            maxLength: 1000 
        })
    },
    display: 'order_number',
    extensible: false,
    allow_web_service_access: true,
    actions: ['create', 'read', 'update', 'delete'],
    auto_number: {
        prefix: 'ORD',
        number: 1000,
        number_of_digits: 4
    }
})