<template>
  <div>
    <!-- Title page -->
    <div class="credit"><h2>CREDIT</h2></div>

    <!-- Image Credit -->
    <div class="container__img">
      <img
        src="https://enter.online/images/companies/1/credit/kredit(3).jpg"
        alt=""
        class="responsive"
      />
    </div>
    <!-- Leading companies -->
    <section class="info1">
      <div class="info1__container">
        <h2>Leading Companies</h2>
        <p>
          Our company operates in partnership with several lending companies
        </p>
        <ul>
          <li>Easy Credit</li>
          <li>Iute Credit</li>
          <li>Microinvest</li>
          <li>Easy Credit</li>
          <li>Iute Credit</li>
          <li>Microinvest</li>
        </ul>
      </div>
    </section>

    <!-- Type of credit -->
    <section class="info2">
      <div class="info2__container">
        <h2>Type of credits</h2>
        <p>There are several types of loans, but the most popular are:</p>
        <ul>
          <li>
            <strong>Credit Zero</strong> - customer favorite, with this loan you
            do not pay any more leu. We offer customers installments for
            different products, whether it's smartphones, tablets with the best
            features, or powerful laptops. The 0% credit can be taken for a
            period of 6 to 18 months.
          </li>
          <li>
            <strong>1% Credit</strong> - it is very simple. You will pay only 1%
            more per month. For example: 6% for six months. 1% credit can be
            taken for a period of 6 to 36 months.
          </li>
          <li>
            <strong>Standard Credit 2%</strong> - this type of credit is offered
            for the widest range of products in Enter stores. 2% credit can be
            taken for a period of 6 to 36 months.
          </li>
        </ul>
      </div>
    </section>

    <!-- Social Media  -->
    <div class="gradient">
      <ul class="social">
        <li>
          <a href=""
            ><img :src="require('../../../../static/img/facebook.png')" alt=""
          /></a>
        </li>
        <li>
          <a href=""
            ><img
              :src="require('../../../../static/img/vk-reproductor.png')"
              alt=""
          /></a>
        </li>
        <li>
          <a href=""
            ><img
              :src="require('../../../../static/img/instagram-logo.png')"
              alt=""
          /></a>
        </li>
        <li>
          <a href=""
            ><img :src="require('../../../../static/img/telegram.png')" alt=""
          /></a>
        </li>
        <li>
          <a href=""
            ><img :src="require('../../../../static/img/pinterest.png')" alt=""
          /></a>
        </li>
        <li>
          <a href=""
            ><img
              :src="require('../../../../static/img/twitter-sign.png')"
              alt=""
          /></a>
        </li>
        <li>
          <a href=""
            ><img :src="require('../../../../static/img/youtube.png')" alt=""
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditPage",
};
</script>

<style scoped>
/*=====  Page Credit =====*/
div.credit h2 {
  margin: 100px 0 0 10%;
}

.responsive {
  border-radius: 20px;
  width: 100%;
  height: auto;
}

div.container__img {
  padding: 50px;
  max-width: 1900px;
}

.info1 {
  background-color: #f8f8f8;
  margin: 10px 50px 50px 50px;
  padding: 50px;
  border-radius: 20px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
}

.info1__container ul {
  list-style: circle;
  margin: 15px 0 0 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.info2 {
  background-color: #f8f8f8;
  margin: 10px 50px 50px 50px;
  padding: 50px;
  border-radius: 20px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
}

.info2__container ul li {
  list-style: circle;
  margin: 15px 0 0 50px;
  padding: 5px;
}

/*=====  Social Media =====*/
.gradient {
  height: 150px;
  text-align: center;
  background-color: red; /* For browsers that do not support gradients */
  background-image: linear-gradient(-90deg, #2c9cc1, #da1e6f);
}

.gradient img {
  margin-top: 50px;
  height: 3%;
  width: 3%;
}

ul.social li {
  display: inline;
  padding: 5px;
}

.social li a {
  background-color: transparent;
}

/*----- MEDIA QUERIES -----*/
@media screen and (max-width: 768px) {
  .info3__container ul {
    margin: 15px 0 0 20px;
  }

  .info4__container ul {
    margin: 15px 0 0 20px;
  }

  .gradient img {
    margin-top: 50px;
    height: 6%;
    width: 6%;
  }
}

@media screen and (max-width: 568px) {
  .gradient img {
    margin-top: 50px;
    height: 7%;
    width: 7%;
  }
}

@media screen and (max-width: 499px) {
  .gradient img {
    margin-top: 50px;
    height: 7%;
    width: 7%;
  }
}

@media screen and (max-width: 449px) {
  .info1__container ul {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 400px) {
  .gradient img {
    margin-top: 50px;
    height: 6%;
    width: 6%;
  }

  .info2__container ul li {
    list-style: circle;
    margin: 15px 0 0 10px;
    padding: 5px;
  }
}
</style>