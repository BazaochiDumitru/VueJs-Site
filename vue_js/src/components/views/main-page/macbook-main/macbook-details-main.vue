<template>
  <main class="l-main bd-grid">
    <section class="home">
      <div class="home__data">
        <h1 class="home__title">MacBook Pro & Air M1</h1>
        <p class="home__description">
          The new Macbook Pro & Air with M1 processors built on ARM technology
          offers new possibilities for development,<br />
          navigation, and long-lasting battery life
        </p>
      </div>

      <div class="home__img">
        <!-- IMG -->
        <img
          :src="require('../../../../../static/img/macbook.png')"
          class="macbook1"
          alt=""
        />
        <img
          :src="require('../../../../../static/img/mbp-silver.png')"
          class="macbook2"
          alt=""
        />
      </div>

      <div class="home__scroll">
        <span class="home__scroll-text"
          >Want? Scroll down for more information</span
        >
        <a href="#l-section">
          <img
            :src="require('../../../../../static/img/bx-mouse.svg')"
            alt=""
          />
        </a>
      </div>
    </section>

    <!-- DETAILS macbooks -->
    <section class="l-section" id="l-section">
      <div class="details">
        <div class="details__content">
          <div class="details__box">
            <span class="details__initial">New</span>
            <h3 class="details__title">M1<span></span></h3>
            <p class="details__description">
              technology<br />
              arm processor
            </p>
          </div>
          <div class="details__box">
            <span class="details__initial">Until</span>
            <h3 class="details__title">24<span> h</span></h3>
            <p class="details__description">
              battery with<br />
              a single charge
            </p>
          </div>
          <div class="details__box">
            <span class="details__initial">Alone</span>
            <h3 class="details__title">15<span> min</span></h3>
            <p class="details__description">
              load equals<br />
              up to 3 hours from<br />
              audio
            </p>
          </div>
        </div>

        <div class="details__img2">
          <img
            :src="
              require('../../../../../static/img/mackbook-4-removebg-preview.png')
            "
            class="macbooks"
            alt=""
          />
        </div>
      </div>
    </section>
    <div class="pricee">
      <span class="pricee__title">$ 1099.00</span>
      <button @click="goToProduct()" class="pricee__button">
        Go to Shopping
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "MacbookPage",
  methods: {
    goToProduct() {
      this.$router.push("/products");
    },
  },
};
</script>

<style scoped>
.home {
  margin-top: 100px;
  height: 800px;
  display: -ms-grid;
  display: grid;
  -ms-grid-rows: 1.5fr 1fr 1fr;
  grid-template-rows: 1.5fr 1fr 1fr;
  grid-template-areas: "data" "img" "scroll";
  row-gap: 1.5rem;
}

.home__data {
  /* margin-left: 50px; */
  grid-area: data;
  text-align: center;
  padding-top: 3.5rem;
}

.home__title {
  font-size: 3.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
}

.home__description {
  font-size: 0.813rem;
  padding: 0 1rem;
}

.home__img {
  margin-left: 50px;
  grid-area: img;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.home__img img {
  height: 300px;
  margin-right: 16px;
}

.home__scroll {
  grid-area: scroll;
  text-align: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
}

.home__scroll-text {
  display: block;
  font-size: 0.75rem;
  margin-bottom: 1rem;
}

.home__scroll-icon {
  width: 2rem;
}

/*===== Price =====*/
.pricee {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 83px;
  background-color: #fff;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 20px rgba(17, 17, 17, 0.25);
  box-shadow: 0px 0px 20px rgba(17, 17, 17, 0.25);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.pricee__title {
  font-size: 1.5rem;
  color: #111111;
}

.pricee__button {
  border: none;
  background-color: black;
  color: #fff;
  padding: 1.25rem 3.125rem;
  border-radius: 10px;
}

/*ANIMATION*/
.macbook1 {
  -webkit-animation: macbook1 3s infinite;
  animation: macbook1 3s infinite;
}

@-webkit-keyframes macbook1 {
  50% {
    -webkit-transform: translatey(-6%);
    transform: translatey(-6%);
  }
}

@keyframes macbook1 {
  50% {
    -webkit-transform: translatey(-6%);
    transform: translatey(-6%);
  }
}

.macbook2 {
  -webkit-animation: macbook2 3s infinite;
  animation: macbook2 3s infinite;
}

@-webkit-keyframes macbook2 {
  50% {
    -webkit-transform: translatey(6%);
    transform: translatey(6%);
  }
}

@keyframes macbook2 {
  50% {
    -webkit-transform: translatey(6%);
    transform: translatey(6%);
  }
}

/*Details macbooks*/
.details {
  margin-top: 50px;
  height: 600px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: max-content max-content;
  grid-template-columns: -webkit-max-content -webkit-max-content;
  grid-template-columns: max-content max-content;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.details__box {
  margin-bottom: 2.5rem;
  text-align: center;
}

.details__initial {
  font-size: 0.75rem;
}

.details__title {
  font-size: 2.25rem;
  font-weight: 400;
}

.details__title span {
  font-size: 1.625rem;
}

.details__description {
  font-size: 0.813rem;
}

.details__img {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
}

.details__img2 img {
  width: 400px;
}

/*ANIMATION*/
.macbooks {
  -webkit-animation: macbooks 3s infinite;
  animation: macbooks 3s infinite;
}

@-webkit-keyframes macbooks {
  50% {
    -webkit-transform: translatey(-6%);
    transform: translatey(-6%);
  }
}

@keyframes macbooks {
  50% {
    -webkit-transform: translatey(-6%);
    transform: translatey(-6%);
  }
}

/*===== MEDIA QUERIS =====*/
@media screen and (min-width: 968px) {
  .data {
    margin-bottom: 2.5rem;
  }

  .data__subtitle {
    font-size: 1.5rem;
  }

  .data__title {
    margin-bottom: 1rem;
  }

  .pricee {
    padding: 50px;
    position: initial;
    background-color: initial;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .pricee__title {
    color: #111111;
    font-weight: 500;
  }
}

@media screen and (min-width: 1200px) {
  .bd-grid {
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 1920px) {
  .details__img2 img {
    margin-top: 50px;
  }

  /* .home {
    margin-top: 50px;
    margin-left: 50px;
  } */

  .home__data {
    margin-bottom: 50px;
  }

  .home__img {
    margin-bottom: 50px;
  }
}

@media only screen and (max-width: 1200px) {
  .home {
    margin-left: 50px;
  }
}

@media only screen and (max-width: 998px) {
  .home {
    /* margin-top: -20px; */
    margin-left: -10px;
  }
}

/*----- MEDIA QUERIES -----*/
@media screen and (max-width: 768px) {
  .home {
    /* margin-top: -20px; */
    margin-left: -15px;
  }

  .home__data {
    width: 100%;
  }

  .details__img2 img {
    margin-top: 50px;
    width: 350px;
  }

  .home__img img {
    height: 240px;
  }
}

@media screen and (max-width: 568px) {
  .home {
    /* margin-top: -20px; */
    margin-left: -20px;
  }

  .home__data {
    margin: auto;
    width: 90%;
  }

  .details__img2 img {
    margin-top: 50px;
    width: 300px;
  }

  .home__img img {
    height: 220px;
    margin-left: -20px;
  }
}

@media screen and (max-width: 499px) {
  .home {
    /* margin-top: -20px; */
    margin-left: -20px;
  }

  .home__data {
    margin-left: 50px;
    width: 80%;
  }

  .home__title {
    font-size: 2.5rem;
  }

  .details__img2 img {
    margin-top: 100px;
    width: 230px;
  }

  .home__img img {
    height: 200px;
    margin-left: -20px;
  }
}

@media screen and (max-width: 449px) {
  .home {
    /* margin-top: -20px; */
    margin-left: -20px;
  }

  .details__img2 img {
    margin-top: 100px;
    width: 200px;
  }

  .home__img img {
    height: 175px;
    margin-left: -20px;
  }
}

@media screen and (max-width: 400px) {
  .home {
    /* margin-top: -20px; */
    margin-left: -20px;
  }

  .home__data {
    margin-left: 50px;
    width: 80%;
  }

  .home__title {
    font-size: 1.5rem;
  }

  .details__img2 img {
    margin-top: 100px;
    width: 175px;
  }

  .home__img img {
    height: 150px;
  }
}
</style>