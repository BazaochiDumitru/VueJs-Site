<template>
  <article class="prod">
    <div class="item-container" data-id="1">
      <div class="card-item">
        <img
          :src="require(`../../../../static/img/${product_data.tag}.png`)"
          alt=""
          class="card-img"
        />

        <p class="item-name">{{ product_data.name }}</p>
        <p class="item-description">{{ product_data.description }}</p>
      </div>
      <h3 class="item-price">
        Price : <span class="item-price-value">{{ product_data.price }}</span> $
      </h3>
      <em>
        <button
          class="product__btn btn add-cart"
          @click="$emit('addToCart', product_data)"
        >
          Add to cart
        </button>
      </em>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product_data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
/* Products Page */

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