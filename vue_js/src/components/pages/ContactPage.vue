<template>
    <section>
        <Header/>
        <ContactPage/>
        <Footer/>
    </section>
</template>

<script>
    import Header from '@/components/views/header/Header'
    import ContactPage from '@/components/views/contact-page/contact'
    import Footer from "@/components/views/footer/Footer";

    export default {
        name: "MainPage",
        components : {
            Header, ContactPage, Footer
        }
    }
</script>

<style scoped>

</style>