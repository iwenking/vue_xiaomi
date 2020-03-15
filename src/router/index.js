import Vue from 'vue'
import Router from 'vue-router'
import Hmoe from '/components/Home'
import Index from '/components/Index'
import Product from '/components/Product'
import Detail from '/components/Detail'
import Cart from '/components/Cart'


Vue.use(Router)



export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Hmoe,
            children:[{
                path:'/index',
                name:'index',
                component:Index
            },
            {
                path:'/product/:id',
                name:'product',
                component:Product
            },
            {
                path:'/detail/:id',
                name:'detail',
                component:Detail
            }]
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart
        }
    ]
});