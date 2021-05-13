import VueRouter from "vue-router";
import MainPage from "@/components/pages/MainPage";
import ProductPage from "@/components/pages/ProductPage";
import CreditPage from "@/components/pages/CreditPage";
import ContactPage from "@/components/pages/ContactPage";
import CartPage from "@/components/pages/CartPage";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'MainPage',
            path: '/',
            component: MainPage
        },
        {
            name: "ProductPage",
            path: '/products',
            component: ProductPage
        },
        {
            name: "CreditPage",
            path: '/credit',
            component: CreditPage
        },
        {
            name: "ContactPage",
            path: '/contact',
            component: ContactPage
        },
        {
            name: "CartPage",
            path: '/cart',
            component: CartPage
        }
    ]
});