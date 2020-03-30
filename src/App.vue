<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'
export default {
  name: 'App',
  data(){
    return {
      res:{}
    }
  },
  mounted(){
    this.getUser();
    this.getCartCount()
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res)=>{
        console.log(res);
        
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        console.log(res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
