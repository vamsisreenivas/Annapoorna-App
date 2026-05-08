import { gs } from '@servicenow/glide'

export function generateOrderNumber(current) {
    if (current.isNewRecord() && gs.nil(current.getValue('order_number'))) {
        current.setValue('order_number', gs.generateGUID().substring(0, 8).toUpperCase())
    }
}