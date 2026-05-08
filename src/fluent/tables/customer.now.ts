import '@servicenow/sdk/global'
import { Table, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_400063_annapoorn_customer = Table({
    name: 'x_400063_annapoorn_customer',
    label: 'Customer',
    schema: {
        name: StringColumn({ 
            label: 'Customer Name', 
            maxLength: 100,
            mandatory: true
        }),
        phone: StringColumn({ 
            label: 'Phone Number', 
            maxLength: 20 
        }),
        email: StringColumn({ 
            label: 'Email Address', 
            maxLength: 100 
        }),
        address: StringColumn({ 
            label: 'Address', 
            maxLength: 500 
        }),
        customer_type: StringColumn({
            label: 'Customer Type',
            choices: {
                walk_in: { label: 'Walk-in', sequence: 0 },
                regular: { label: 'Regular', sequence: 1 },
                vip: { label: 'VIP', sequence: 2 }
            },
            dropdown: 'dropdown_with_none',
            default: 'walk_in'
        }),
        loyalty_member: BooleanColumn({
            label: 'Loyalty Member',
            default: false
        }),
        notes: StringColumn({ 
            label: 'Notes', 
            maxLength: 1000 
        })
    },
    display: 'name',
    extensible: false,
    allow_web_service_access: true,
    actions: ['create', 'read', 'update', 'delete']
})