<template>
  <div>
    <!-- Title page -->
    <div class="credit"><h2>CONTACTS</h2></div>

    <!-- Image Contacts -->
    <div class="container__img">
      <img src="https://enter.online/images/companies/1/Contacts/contacts_entr.webp" alt="" class="responsive"/>
    </div>

    <!-- Online Store -->
    <section class="info3">
      <div class="info3__container">
        <h2>Online Store</h2>
        <ul>
          <li>
            <img :src="require('../../../../static/img/telephone.png')" alt=""/>
            0(231) 4 44 44 / 068 123 456
          </li>
          <li>
            <img :src="require('../../../../static/img/gmail.png')" alt=""/>
            company@gmail.com
          </li>
          <li>
            <img :src="require('../../../../static/img/clock.png')" alt=""/>
            Work program: Monday-Friday: 8am-8pm, Saturday: 9am-8pm, Sunday:
            9am-7pm
          </li>
        </ul>
      </div>
    </section>

    <!-- Service center -->
    <section class="info4">
      <div class="info4__container">
        <h2>Service Center & Store Address</h2>
        <ul>
          <li>
            <img :src="require('../../../../static/img/placeholder.png')" alt=""/>
            42 Dream House, Balti, Moldova
          </li>
          <li>
            <img :src="require('../../../../static/img/telephone.png')" alt=""/>
            0(231) 4 44 44 / 068 123 456
          </li>
          <li>
            <img :src="require('../../../../static/img/gmail.png')" alt=""/>
            company@gmail.com
          </li>
          <li>
            <img :src="require('../../../../static/img/clock.png')" alt=""/>
            Work program: Monday-Friday: 8am-8pm, Saturday: 9am-8pm, Sunday:
            9am-7pm
          </li>
        </ul>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36710.46750896094!2d27.891060449999998!3d47.7612147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1577443074188!5m2!1sru!2s"
            style="width: 100%; height: 500px"
        ></iframe>
      </div>
    </section>

    <!-- Social Media  -->
    <div class="gradient">
      <ul class="social">
        <li>
          <a href=""><img :src="require('../../../../static/img/facebook.png')" alt=""/></a>
        </li>
        <li>
          <a href=""><img :src="require('../../../../static/img/vk-reproductor.png')" alt=""/></a>
        </li>
        <li>
          <a href=""><img :src="require('../../../../static/img/instagram-logo.png')" alt=""/></a>
        </li>
        <li>
          <a href=""><img :src="require('../../../../static/img/telegram.png')" alt=""/></a>
        </li>
        <li>
          <a href=""><img :src="require('../../../../static/img/pinterest.png')" alt=""/></a>
        </li>
        <li>
          <a href=""><img :src="require('../../../../static/img/twitter-sign.png')" alt=""/></a>
        </li>
        <li>
          <a href=""><img :src="require('../../../../static/img/youtube.png')" alt=""/></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
/*=====  Page CONTACTS =====*/
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

.info3 {
  background-color: #f8f8f8;
  margin: 10px 50px 50px 50px;
  padding: 50px;
  border-radius: 20px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
}

.info3__container ul {
  margin: 15px 0 0 50px;
  display: grid;
  list-style: none;
}

.info3__container ul li {
  padding: 5px;
}

.info4 {
  background-color: #f8f8f8;
  margin: 10px 50px 50px 50px;
  padding: 50px;
  border-radius: 20px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
}

.info4__container ul {
  margin: 15px 0 0 50px;
  display: grid;
  list-style: none;
}

.info4__container ul li {
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
  height: 3.5%;
  width: 3.5%;
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