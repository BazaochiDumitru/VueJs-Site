<template>
  <footer id="footer" class="section footer">
    <div class="container__footer">
      <div class="footer__top">
        <div class="footer-top__box">
          <h3>EXTRAS</h3>
          <a href="#">Brands</a>
          <a href="#">Gift Certificates</a>
          <a href="#">Affiliate</a>
          <a href="#">Specials</a>
          <a href="#">Site Map</a>
        </div>
        <div class="footer-top__box">
          <h3>INFORMATION</h3>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
          <a href="#">Site Map</a>
        </div>
        <div class="footer-top__box">
          <h3>MY ACCOUNT</h3>
          <a href="#">My Account</a>
          <a href="#">Order History</a>
          <a href="#">Wish List</a>
          <a href="#">Newsletter</a>
          <a href="#">Returns</a>
        </div>
        <div class="footer-top__box">
          <h3>CONTACT US</h3>
          <div>
            <span>
              <img
                :src="require('../../../../static/img/placeholder.png')"
                alt=""
              />
            </span>
            42 Dream House, Balti, Moldova
          </div>
          <div>
            <span>
              <img :src="require('../../../../static/img/gmail.png')" alt="" />
            </span>
            company@gmail.com
          </div>
          <div>
            <span>
              <img
                :src="require('../../../../static/img/telephone.png')"
                alt=""
              />
            </span>
            +373 681 23 456
          </div>
          <div>
            <span>
              <img
                :src="require('../../../../static/img/paper-plane.png')"
                alt=""
              />
            </span>
            Balti, Moldova
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer-bottom__box"></div>
      <div class="footer-bottom__box"></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/*===== Footer =====*/

.footer {
  background-color: #252525;
  padding: 50px 100px;
  line-height: 30px;
}

.footer-top__box span img {
  width: 20px;
  height: 20px;
  fill: grey;
}

.footer-top__box span {
  margin-right: 16px;
}

.footer-top__box a {
  text-decoration: none;
}

.footer__top {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: grey;
}

.footer-top__box a:link,
.footer-top__box a:visited {
  display: block;
  color: grey;
  font-size: 14px;
  transition: 0.6s;
}

.footer-top__box a:hover {
  color: orange;
}

.footer-top__box div {
  color: grey;
  font-size: 12px;
}

.footer-top__box h3 {
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

@media only screen and (max-width: 1920px) {
  .details__img2 img {
    margin-top: 50px;
  }

  .home {
    margin-top: 50px;
    margin-left: 50px;
  }

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

  .card {
    text-align: center;
    font-family: sans-serif;
    grid-column: 3 span;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }

  /* .container__product {
      width: 100%;
      padding: 0 20px;
      margin: 50px auto;
    }

    .grid-container {
      align-content: center;
      width: 100%;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 2fr;
    }

    .products-grid {
      grid-gap: 20px;
      grid-template-columns: repeat(3, 1fr);
    } */
}

@media only screen and (max-width: 998px) {
  .home {
    /* margin-top: -20px; */
    margin-left: -10px;
  }

  .footer__top {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
  }

  /* .container__product {
      width: 100%;
      padding: 0 20px;
      margin: 50px auto;
    }

    .grid-container {
      align-content: center;
      width: 100%;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 2fr;
    }

    .products-grid {
      grid-gap: 20px;
      grid-template-columns: repeat(3, 1fr);
    } */
}

@media only screen and (max-width: 768px) {
  .footer__top {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  /* .container__product {
      width: 80%;
      padding: 0 20px;
      margin: 50px auto;
    }
    .grid-container {
      width: 100%;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr;
    }

    .products-grid {
      grid-gap: 20px;
      grid-template-columns: repeat(2, 1fr);
    } */
}

@media only screen and (max-width: 568px) {
  /* .container__product {
      width: 80%;
      padding: 0 20px;
      margin: 50px auto;
    }

    .grid-container {
      width: 100%;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr;
    }

    .products-grid {
      grid-gap: 20px;
      grid-template-columns: 1fr;
    } */
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

  .footer-top__box h3 {
    font-size: 1.6rem;
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

  .gradient img {
    margin-top: 50px;
    height: 7%;
    width: 7%;
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

  .gradient img {
    margin-top: 50px;
    height: 7%;
    width: 7%;
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

  .info1__container ul {
    grid-template-columns: 1fr;
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

  .gradient img {
    margin-top: 50px;
    height: 6%;
    width: 6%;
  }

  .footer-top__box h3 {
    font-size: 1.4rem;
  }

  .info2__container ul li {
    list-style: circle;
    margin: 15px 0 0 10px;
    padding: 5px;
  }
}
</style>