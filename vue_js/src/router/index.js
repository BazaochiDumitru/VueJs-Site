import VueRouter from "vue-router";
import MainPage from "@/components/pages/MainPage";
import ProductPage from "@/components/pages/ProductPage";

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
        }
    ]
});