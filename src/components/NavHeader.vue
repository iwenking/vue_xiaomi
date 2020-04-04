<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-else @click="login">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span> 购物车({{cartCount}})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-log">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-mueu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+ item.id">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price}}元起</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-mueu">
            <span>RedMi红米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-mueu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      phoneList: []
    };
  },
  computed:{
    username(){
      return this.$store.state.username;
    },
    cartCount(){
      return this.$store.state.cartCount;
    }
  },
  mounted() {
    this.getProductList()
  },
  methods: {
    login(){
      this.$router.push('/login')
    },
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012"
          }
        })
        .then(res => {
          this.phoneList =  res.list.length > 6 ? res.list.slice(0,6) : res.list;
        });
    },
    goToCart(){
      this.$router.push('/cart')
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
  }
  .container {
    @include flex();
    a {
      display: inline-block;
      color: #b0b0b0;
      margin-right: 17px;
    }
    .my-cart {
      width: 110px;
      background-color: #ff6600;
      text-align: center;
      color: #fff;
      margin-right: 0;
    }
    .icon-cart {
      @include baImg(16px, 12px, "/imgs/icon-cart-checked.png");
      margin-right: 4px;
    }
  }

  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .header-log {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before {
            content: " ";
            display: inline-block;
            @include baImg(55px, 55px, "/imgs/mi-logo.png", "55px");
            transition: margin 0.2s;
          }
          &::after {
            content: " ";
            display: inline-block;
            @include baImg(55px, 55px, "/imgs/mi-home.png", "55px");
          }
          &:hover::before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-mueu {
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            overflow: hidden;
            transition: height 0.5s;
            background-color: #fff;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              img {
                height: 111px;
                width: auto;
                margin-top: 26px;
              }
              a {
                display: inline-block;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: #333;
              }
              .pro-price {
                color: $colorA;
              }

              &::before {
                content: " ";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child::before {
                display: none;
              }
            }
          }
        }
      }

      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: content-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            display: inline-block;
            @include baImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>