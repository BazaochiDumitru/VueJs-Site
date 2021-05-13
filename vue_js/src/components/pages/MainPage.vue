<template>
    <section>
        <Header/>
        <MacbookPage/>
        <Footer/>
    </section>
</template>

<script>
    import Header from '@/components/views/header/Header'
    import MacbookPage from '@/components/views/main-page/macbook-main/macbook-details-main'
    import Footer from "@/components/views/footer/Footer";

    export default {
        name: "MainPage",
        components : {
            Header, MacbookPage, Footer
        }
    }
</script>

<style scoped>

</style>