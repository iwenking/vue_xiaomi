<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="sub in item" :key="sub.id">
                    <a :href="sub !==1 ? '/#/product/'+sub.id : '30'">
                      <img :src="sub !==1 ? sub.img : '/imgs/item-box-1.png'" />
                      {{sub !== 1 ? sub.name :"小米9"}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <el-carousel indicator-position="outside" height="451px">
          <el-carousel-item v-for="(item,index) in slideList" :key="index">
            <a v-bind:href="'/#/product/'+item.id">
              <img v-bind:src="item.img" />
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="ads-box">
        <a v-for="(item,index) in adsList" :key="index" :href="'/#/product/'+item.id">
          <img :src="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" alt="">
        </a>
      </div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
export default {
  name: "nav-index",
  components: {
    ServiceBar
  },
  data() {
    return {
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "49",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "50",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        [
          {
            id: "30",
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: "31",
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: "32",
            img: "/imgs/item-box-3.jpg",
            name: "红米 K20 Pro"
          },
          {
            id: "33",
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区"
          }
        ],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1]
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/config.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
            &::after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: " ";
              @include baImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: #fff;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid #e5e5e5;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: #333;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    img {
      width: 100%;
    }
  }
  .el-carousel__arrow--left {
    left: 280px;
  }
  .ads-box{
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a{
      width: 296px;
      height: 167px;

    }
  }
  .banner{
    margin-bottom: 50px;
  }
}
</style>