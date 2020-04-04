<template>
  <div class="nav-bar" :class="{'is_fixed' : Fixed}">
    <div class="container">
      <div class="pro-title">{{title}}</div>
      <div class="pro-params">
        <a href="javascript:;">概述</a>
        <span>|</span>
        <a href="javascript:;">参数</a>
        <span>|</span>
        <a href="javascript:;">评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  props:{
    title:String
  },
  data() {
    return {
      Fixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  destroyed(){
      window.removeEventListener("scroll", this.initHeight,false);
  },
  methods: {
    initHeight() {
      let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
      this.Fixed = scrollTop > 152 ? true : false;
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/scss/config.scss";
@import "@/assets/scss/mixin.scss";
.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid #e5e5e5;
  width: 100%;
  background-color: #fff;
  &.is_fixed {
    position: fixed;
    top: 0;
    box-shadow: 0 5px 5px #ccc;
  }
  .container {
    @include flex();
    .pro-title {
      font-size: 18px;
      color: #333;
      font-weight: bold;
    }
    .pro-params {
      font-size: 14px;
      span {
        margin: 0 4px;
      }
      a {
        color: #666;
      }
    }
  }
}
</style>