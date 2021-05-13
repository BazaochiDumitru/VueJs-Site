<template>
    <header class="l-header">
        <!-- Navigaation -->
        <nav class="nav bd-grid">
            <div class="nav__toggle" :class="[isToggled ? 'show' : '']" @click="toggleMenu" id="nav-toggle">
                <img src="icons/icon-menu.svg" alt=""/>
                <img :src="require('../../../../static/img/icon-menu.svg')" alt="">
            </div>
            <div>
                <a href="index.html" class="nav__logo">
                    <img :src="require('../../../../static/img/command-symbol.png')" alt=""/>
                </a>
            </div>
            <!-- ===== NAV LIST ===== -->
            <div class="nav__menu" :class="[isToggled ? 'show' : '']" @click="toggleMenu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a @click="checkCurrentRoute($router, '/')" class="nav__link">HOME</a>
                    </li>
                    <li class="nav__item">
                        <a @click="checkCurrentRoute($router, '/products')" class="nav__link">PRODUCTS</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">SALE</a>
                    </li>
                    <li class="nav__item">
                        <a href="credit.html" class="nav__link">CREDIT</a>
                    </li>
                    <li class="nav__item">
                        <a href="contacts.html" class="nav__link">CONTACTS</a>
                    </li>
                </ul>
            </div>
            <div class="header__cart cart" tabindex="0">
                <a href="Cart.html" class="cart"><img :src="require('../../../../static/img/shopping-bag.svg')" alt="">
                    <span id="cartValue">0</span>
                </a>
            </div>
        </nav>
    </header>
</template>

<script>
    import {checkCurrentRoute} from "@/router/routeCheck";

    export default {
        name: "Header",
        data: () => ({
            isToggled: false,
            checkCurrentRoute
        }),
        methods : {
            toggleMenu() {
                this.isToggled = !this.isToggled;
            }
        }
    }
</script>

<style scoped>
    .nav {
        height: 3rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    @media screen and (max-width: 968px) {
        .nav__menu {
            position: fixed;
            left: -100%;
            top: 3rem;
            background-color: #fff;
            width: 80%;
            height: 100%;
            padding: 2rem;
            z-index: 100;
            -webkit-transition: .3s;
            transition: .3s;
        }
    }

    .nav__item {
        margin-bottom: 2rem;
        font-weight: 700;
    }

    .nav__link {
        color: #111111;
    }

    .nav__toggle {
        cursor: pointer;
    }

    .nav__list li {
        list-style: none;
        text-decoration: none;
    }
    .nav__list li a {
        text-decoration: none;
    }

    .cart a {
        text-decoration: none;
    }

    /*Aparecer menu*/
    .show {
        left: 0;
    }

    /*===== MEDIA QUERIS =====*/
    @media screen and (min-width: 968px) {
        body {
            margin: 0;
        }
        .nav {
            height: 4rem;
        }
        .nav__list {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
        }
        .nav__item {
            margin-right: 3rem;
            margin-bottom: 0;
        }
        .nav__toggle {
            display: none;
        }
        .home {
            height: 100vh;
            -ms-grid-columns: max-content max-content;
            grid-template-columns: -webkit-max-content -webkit-max-content;
            grid-template-columns: max-content max-content;
            -ms-grid-rows: max-content;
            grid-template-rows: -webkit-max-content;
            grid-template-rows: max-content;
            -ms-flex-line-pack: center;
            align-content: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-column-gap: 6rem;
            column-gap: 6rem;
        }
    }

    @media screen and (min-width: 1200px) {
        .bd-grid {
            align-content: center;
            margin-left: auto;
            margin-right: auto;
        }
    }

    /*=====  LAYOUT =====*/
    .bd-grid {
        /* max-width: 1200px; */
        padding: 20px;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .l-header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        background-color: #fff;
    }

</style>