<template>
  <div>
    <div class="products-container">
      <div class="product-header">
        <h5 class="product-title">PRODUCT</h5>
        <h5 class="quantity">QUANTITY</h5>
        <h5 class="price">PRICE</h5>
      </div>
      <ul class="products"></ul>
    </div>
    <div class="total__container"></div>

    <div class="form__container">
      <form class="form-inline">
        <h3>ORDER FORM</h3>
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Enter name" name="name" />
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Enter email" name="email" />
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" placeholder="Enter phone" name="phone" />
        <label for="address">Address:</label>
        <input
          type="text"
          id="address"
          placeholder="Enter address"
          name="address"
        />
        <label for="city">City:</label>
        <select id="city" name="city" style="height: 40px">
          <option value="chisinau">Chisinau</option>
          <option value="balti">Balti</option>
          <option value="other">Other...</option>
        </select>

        <label for="delivery">Delivery Method:</label>
        <select id="delivery" name="city" style="height: 40px">
          <option value="0">Posta Moldovei - 4-7 days - FREE</option>
          <option value="10">Nova Poshta - 2-4 days - 10$</option>
          <option value="25">DHL - 1-2 days - 25$</option>
        </select>

        <label for="payment">Payment Method:</label>
        <select id="payment" name="payment" style="height: 40px">
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="credit">Credit</option>
        </select>
        <label for="comment">Comments:</label>
        <textarea
          id="comment"
          name="subject"
          placeholder="Write something.."
          style="height: 100px"
        ></textarea>
        <a id="validate">Order</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartPage",
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  padding-bottom: 100px;
}

.products-container {
  max-width: 680px;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 100px;
}

.product-header {
  width: 100%;
  max-width: 680px;
  display: flex;
  justify-content: flex-start;
  border-bottom: 4px solid gray;
  margin: 0 auto;
}

.products {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.products li {
  margin-left: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
}
.product-header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.remove__btn {
  margin-top: 20px;
  margin-left: -15px;
  grid-area: 1 / 1 / 2 / 2;
}

.product__img {
  margin-left: 25px;
  grid-area: 1 / 1 / 2 / 3;
}

.product__name {
  margin-top: 20px;
  grid-area: 1 / 2 / 2 / 4;
}

.product__price {
  margin-top: 20px;
  grid-area: 1 / 5 / 2 / 6;
}

.product__quantity {
  margin-top: 20px;
  grid-area: 1 / 4 / 2 / 5;
}

.product__img img {
  width: 65px;
}

.basketTotalContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  border-top: 2px solid gray;
}

.basketTotalTitle {
  margin-left: 7%;
  width: 25%;
}

.basketTotal {
  width: 10%;
}
.product-title {
  display: flex;
  margin-left: 150px;
  justify-content: flex-start;
}
.quantity {
  display: flex;
  margin-left: 210px;
  justify-content: flex-start;
}
.price {
  display: flex;
  margin-left: 70px;
  justify-content: flex-start;
}

.form-inline {
  max-width: 800px;
  padding: 30px;
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  display: flex;
  flex-flow: column wrap;
  /* align-items: center; */
  align-items: stretch;
}

.form-inline h3 {
  text-align: center;
}

.form-inline label {
  margin: 5px 10px 5px 0;
}

.form-inline input {
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
}

.form-inline a {
  margin-top: 10px;
  text-align: center;
  padding: 10px 20px;
  background-color: dodgerblue;
  border: 1px solid #ddd;
  color: white;
}

.form-inline a:hover {
  background-color: royalblue;
}

@media screen and (max-width: 620px) {
  .product__name {
    margin-left: 15px;
    grid-area: 1 / 1 / 2 / 4;
  }

  .product__img img {
    display: none;
  }
  .basketTotalContainer {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px 0;
  }
  .basketTotal {
    width: fit-content;
  }
  .product-title {
    display: flex;
    margin-left: 70px;
    justify-content: flex-start;
  }
  .quantity {
    display: flex;
    margin-left: 100px;
    justify-content: flex-start;
  }
  .price {
    display: flex;
    margin-left: 7px;
    justify-content: flex-start;
  }
  .form-inline {
    padding: 20px;
  }
}

@media screen and (max-width: 768px) {
  .form-inline {
    padding: 20px;
  }
}

@media (max-width: 1200px) {
  .form-inline input {
    margin: 10px 0;
  }

  .form-inline {
    padding: 20px;
    flex-direction: column;
    align-items: stretch;
  }
}
</style>