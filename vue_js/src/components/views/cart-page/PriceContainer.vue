<template>
  <div>
    <div class="total__container">
      <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">Total Price</h4>
        <h4 class="basketTotal">
          ${{ $cart.cartSum(CART, parseInt(shippingPrice)) }}
        </h4>
      </div>
    </div>

    <div class="form__container">
      <form class="form-inline">
        <h3>ORDER FORM</h3>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          name="name"
          v-model="name"
        />
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          name="email"
          v-model="email"
        />
        <label for="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter phone"
          name="phone"
          v-model="phone"
        />
        <label for="address">Address:</label>
        <input
          type="text"
          id="address"
          v-model="address"
          placeholder="Enter address"
          name="address"
        />
        <label for="city">City:</label>
        <select
          id="city"
          name="city"
          style="height: 40px"
          v-model="selectedCity"
        >
          <option>Chisinau</option>
          <option>Balti</option>
          <option>Other...</option>
        </select>

        <label for="delivery">Delivery Method:</label>
        <select
          id="delivery"
          name="city"
          style="height: 40px"
          v-model="shippingPrice"
        >
          <option value="0">Posta Moldovei - 4-7 days - FREE</option>
          <option value="10">Nova Poshta - 2-4 days - 10$</option>
          <option value="25">DHL - 1-2 days - 25$</option>
        </select>

        <label for="payment">Payment Method:</label>
        <select
          id="payment"
          name="payment"
          style="height: 40px"
          v-model="paymentMethod"
        >
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
        <a id="validate" @click="validateForm">Order</a>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PriceContainer",
  data: () => ({
    selectedCity: "",
    shippingPrice: 0,
    paymentMethod: "",
    address: "",
    phone: "",
    name: "",
    email: "",
    country: "",
  }),
  computed: mapGetters(["CART"]),
  methods: {
    ...mapActions(["CLEAR__CART"]),
    validateForm() {
      const nameRegexp = /^[a-zA-Z ]{2,30}$/;
      if (!new RegExp(nameRegexp).test(this.name)) {
        alert("Wrong Name");
        return;
      }

      const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!new RegExp(emailRegexp).test(this.email)) {
        alert("Wrong Email");
        return;
      }

      const phoneRegexp = /^[+373|373]*[0]*[0-9]{7,8}$/;
      if (!new RegExp(phoneRegexp).test(this.phone)) {
        alert("Wrong phone");
        return;
      }

      const addressRegexp = /^[a-zA-Z0-9\s,'-]{4,}$/;
      if (
        !(
          new RegExp(addressRegexp).test(this.address) &&
          this.address.length < 20
        )
      ) {
        alert("Wrong address");
        return;
      }

      localStorage.setItem("name", this.name);
      localStorage.setItem("email", this.email);
      localStorage.setItem("phone", this.phone);
      localStorage.setItem("address", this.address);
      localStorage.setItem("city", this.selectedCity);
      localStorage.setItem("payment", this.paymentMethod);
      localStorage.setItem("orderedItems", JSON.stringify(this.CART));
      localStorage.setItem("shippingPrice", this.shippingPrice.toString());

      this.CLEAR__CART();
      this.shippingPrice = 0;

      console.log("Data sent successfully!");
      alert("Data sent successfully!");
    },
  },
  watch: {
    name() {
      this.name = this.name.replace(/[^a-zA-Z]/g, "");
    },
    city() {
      this.city = this.city.replace(/[^a-zA-Z]/g, "");
    },
    country() {
      this.country = this.country.replace(/[^a-zA-Z]/g, "");
    },
  },
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