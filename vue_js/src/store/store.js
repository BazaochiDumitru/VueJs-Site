import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [],
        cart: JSON.parse(localStorage.getItem('cart')) || []
    },
    mutations: { // should modify state
        SET_PRODUCTS: (state, products) => {
            state.products = products;
        },
        ADD_CART: (state, product) => {
            state.cart.push(product);
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        INCREASE_QUANTITY: (state, product) => {
            state.cart.find(item => item.id === product.id).quantity++;
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        DECREASE_QUANTITY: (state, product) => {
            const currQuantity = state.cart.find(item => item.id === product.id).quantity;
            if (currQuantity - 1 > 0) state.cart.find(item => item.id === product.id).quantity--;
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        REMOVE_PRODUCT: (state, product) => {
            state.cart.splice(state.cart.findIndex(item => item.id === product.id), 1);
            localStorage.setItem('cart', state.cart);
        },
        CLEAR__CART: (state) => {
            state.cart = [];
            localStorage.removeItem('cart');
        }
    },
    actions: {
        async GET_PRODUCTS(ctx) {
            return fetch('product.json').then(response => {
                return response.json().then(resolved => {
                    ctx.commit('SET_PRODUCTS', resolved);
                })
            });
        },
        ADD_CART(ctx, product) {
            ctx.commit('ADD_CART', product);
        },
        INCREASE_QUANTITY(ctx, product) {
            ctx.commit('INCREASE_QUANTITY', product);
        },
        DECREASE_QUANTITY(ctx, product) {
            ctx.commit('DECREASE_QUANTITY', product);
        },
        REMOVE_PRODUCT(ctx, product) {
            ctx.commit('REMOVE_PRODUCT', product)
        },
        CLEAR__CART(ctx) {
            ctx.commit('CLEAR__CART');
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        },
        CART(state) {
            return state.cart
        },
        COUNT(state) {
            return state.cart.reduce((accumulator, value) => accumulator + value.quantity, 0)
        }
    }
});

export default store;