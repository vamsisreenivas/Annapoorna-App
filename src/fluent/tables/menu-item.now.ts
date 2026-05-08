import '@servicenow/sdk/global'
import { Table, StringColumn, DecimalColumn, BooleanColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_400063_annapoorn_menu_item = Table({
    name: 'x_400063_annapoorn_menu_item',
    label: 'Menu Item',
    schema: {
        name: StringColumn({ 
            label: 'Item Name', 
            maxLength: 100,
            mandatory: true
        }),
        description: StringColumn({ 
            label: 'Description', 
            maxLength: 500 
        }),
        recipe: StringColumn({ 
            label: 'Recipe/Ingredients', 
            maxLength: 2000 
        }),
        image_url: StringColumn({ 
            label: 'Image URL', 
            maxLength: 500 
        }),
        category: StringColumn({
            label: 'Category',
            choices: {
                appetizer: { label: 'Appetizer', sequence: 0 },
                main_course: { label: 'Main Course', sequence: 1 },
                dessert: { label: 'Dessert', sequence: 2 },
                beverage: { label: 'Beverage', sequence: 3 },
                snack: { label: 'Snack', sequence: 4 }
            },
            dropdown: 'dropdown_with_none'
        }),
        price: DecimalColumn({ 
            label: 'Price',
            mandatory: true
        }),
        available: BooleanColumn({ 
            label: 'Available',
            default: true
        }),
        preparation_time: IntegerColumn({
            label: 'Preparation Time (minutes)',
            min: 1,
            max: 120,
            default: 15
        }),
        spice_level: StringColumn({
            label: 'Spice Level',
            choices: {
                mild: { label: 'Mild', sequence: 0 },
                medium: { label: 'Medium', sequence: 1 },
                spicy: { label: 'Spicy', sequence: 2 },
                extra_spicy: { label: 'Extra Spicy', sequence: 3 }
            },
            dropdown: 'dropdown_with_none'
        }),
        vegetarian: BooleanColumn({
            label: 'Vegetarian',
            default: false
        }),
        popular: BooleanColumn({
            label: 'Popular Item',
            default: false
        })
    },
    display: 'name',
    extensible: false,
    allow_web_service_access: true,
    actions: ['create', 'read', 'update', 'delete']
})