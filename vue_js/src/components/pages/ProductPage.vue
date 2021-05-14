<template>
<section>
    <Header/>
    <Product/>
    <Footer/>
</section>
</template>

<script>
    import Header from '@/components/views/header/Header'
    import Product from '@/components/views/product-page/product'
    import Footer from "@/components/views/footer/Footer";

    export default {
        name: "ProductPage",
        components : {
            Header, Product, Footer
        }
    }
</script>

<style scoped>

</style>