<template>
  <section>
    <Header />
    <CartPage/>
    <PriceContainer/>
  </section>
</template>

<script>
import Header from "@/components/views/header/Header";
import CartPage from "../views/cart-page/CartPage";
import PriceContainer from "../views/cart-page/PriceContainer";

export default {
  name: "MainPage",
  components: {
    Header, CartPage, PriceContainer
  },
};
</script>

<style scoped>
</style>