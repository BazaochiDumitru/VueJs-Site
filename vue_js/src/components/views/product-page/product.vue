<template>
  <div>
    <h2>Products</h2>
    <section class="categories">
      <div class="container__product">
        <div class="card" id="cardItems">
          <ProductItem
            :key="product.id"
            :product_data="product"
            @addToCart="showResult"
            v-for="product in PRODUCTS"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductItem from "./ProductItem";

export default {
  name: "Product",
  components: {
    ProductItem,
  },
  methods: {
    ...mapActions(["GET_PRODUCTS", "ADD_CART", "INCREASE_QUANTITY"]),
    showResult(product) {
      const currProduct = { ...product, quantity: 1 };

      if (this.$cart.inCart(this.CART, product))
        this.INCREASE_QUANTITY(product);
      if (!this.$cart.inCart(this.CART, product)) this.ADD_CART(currProduct);
    },
  },
  computed: mapGetters(["PRODUCTS", "CART"]),
  async mounted() {
    await this.GET_PRODUCTS();
  },
};
</script>

<style scoped>
h2 {
  margin-top: 100px;
  margin-left: 100px;
  margin-bottom: 50px;
}
.container__product {
  width: 1244px;
  padding: 0 20px;
  margin: 100px auto;
}

.prod {
  /* width: 285px; */
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 20px;
  padding-top: 9px;
  font-size: 14px;
  background-color: #fff;
}

.categories {
  margin-top: 25px;
}

.containers {
  margin: 17%;
  margin-top: 10px;
}

.card {
  text-align: center;
  font-family: sans-serif;
  grid-column: 3 span;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
}

.item-container {
  background: white;
  position: relative;
  background: white;
  padding: 15px 12px;
  position: relative;
}

.card-item {
  cursor: pointer;
}

.card-img {
  position: relative;
  max-width: 100%;
  max-height: 8rem;
  text-align: center;
}

.item-name {
  text-align: center;
  color: rgb(0, 0, 0);
  margin-top: 1rem;
  font-size: 0.95rem;
}
.item-description {
  text-align: justify;
  color: rgb(0, 0, 0);
  margin-top: 1rem;
  font-size: 0.95rem;
}

.add-to-cart {
  font-size: 1.5rem;
  color: rgb(166, 0, 0);
  position: absolute;
  bottom: 1rem;
  right: 0.8rem;
  cursor: pointer;
  opacity: 0;
}

.item-price {
  color: black;
  text-align: center;
  margin-top: 0.5rem;
}

.product__btn {
  width: 100%;
}

.product__btn:disabled {
  opacity: 0.4;
  pointer-events: none;
}

.btn {
  border: none;
  padding: 14px 0;
  border-radius: 4px;
  color: #fff;
  background-color: #5d71dd;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.product__btn:hover {
  background-color: #6078f1;
  transition: background-color 0.3s ease-in-out;
}

.btn:hover {
  background-color: #6078f1;
  transition: background-color 0.3s ease-in-out;
}

@media only screen and (max-width: 1200px) {
  .home {
    margin-left: 50px;
  }
  .card {
    text-align: center;
    font-family: sans-serif;
    grid-column: 3 span;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
  .container__product {
    width: 100%;
    padding: 0 20px;
    margin: 50px auto;
  }
}

@media only screen and (max-width: 998px) {
  .home {
    /* margin-top: -20px; */
    margin-left: -10px;
  }
  .card {
    text-align: center;
    font-family: sans-serif;
    grid-column: 3 span;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
  .container__product {
    width: 100%;
    padding: 0 20px;
    margin: 50px auto;
  }
}

@media only screen and (max-width: 768px) {
  .card {
    text-align: center;
    font-family: sans-serif;
    grid-column: 3 span;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  .container__product {
    width: 100%;
    padding: 0 20px;
    margin: 50px auto;
  }
}

@media only screen and (max-width: 568px) {
  h2 {
    margin-top: 100px;
    margin-left: 50px;
    margin-bottom: 50px;
  }
  .card {
    text-align: center;
    font-family: sans-serif;
    grid-column: 3 span;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr;
  }
  .container__product {
    width: 100%;
    padding: 0 20px;
    margin: 50px auto;
  }
}
</style>