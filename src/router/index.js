import Vue from 'vue'
import Router from 'vue-router'
import Hmoe from '@/Page/Home'
import Index from '@/Page/Index'
import Product from '@/Page/Product'
import Detail from '@/Page/Detail'
import Cart from '@/Page/Cart'
import Order from '@/Page/Order'
import orderConfirm from '@/Page/orderConfirm'
import orderList from '@/Page/orderList'
import orderPay from '@/Page/orderPay'
import Login from '@/Page/login'


Vue.use(Router)



export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Hmoe,
            redirect:'/index',
            children: [{
                    path: '/index',
                    name: 'index',
                    component: Index
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: Product
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [{
                    path: 'list',
                    name: 'order-list',
                    component: orderList
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: orderConfirm
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: orderPay
                }
            ]

        }
    ]
});