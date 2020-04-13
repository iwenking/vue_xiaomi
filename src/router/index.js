import Vue from 'vue'
import Router from 'vue-router'
import Hmoe from '@/Page/Home'
import Index from '@/Page/Index'
Vue.use(Router)



export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Hmoe,
        redirect: '/index',
        children: [{
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/product/:id',
            name: 'product',
            component: resolve => require(['@/Page/Product.vue'], resolve)
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: resolve => require(['@/Page/Detail.vue'], resolve)
        }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/Page/login.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component:() => import('@/Page/Cart.vue')
    },
    {
        path: '/order',
        name: 'order',
        component:() => import('@/Page/Order.vue'),
        children: [{
            path: 'list',
            name: 'order-list',
            component:() => import('@/Page/orderList.vue')
        },
        {
            path: 'confirm',
            name: 'order-confirm',
            component:() => import('@/Page/orderConfirm.vue')
        },
        {
            path: 'pay',
            name: 'order-pay',
            component:() => import('@/Page/orderPay.vue')
        },
        {
            path: 'alipay',
            name: 'alipay',
            component:() => import('@/Page/alipay.vue')
        }
        ]

    }
    ]
});
