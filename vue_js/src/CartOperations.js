export default class CartOperations {
    inCart(cart, product) {
        return cart.find(item => product.id === item.id)
    }

    cartSum(cart, shippingPrice) {
        return cart.reduce((accumulator, value) => accumulator + value.price * value.quantity, 0) + shippingPrice
    }
}