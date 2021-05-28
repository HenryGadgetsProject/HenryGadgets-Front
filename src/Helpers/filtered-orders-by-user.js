export function filteredOrdersByUser(state) {

    let filteredOrders = state.order.orders

    if(state.order.orders) {
        // filteredOrders = filteredOrders.filter(orders => orders.user.id )
    }    

    return filteredOrders
}
