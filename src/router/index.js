import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        // 登录页面
        path: '/',
        name: 'login',
        component: ()=>import(/*webpackChunkName:'Login'*/'@/page/login/login.vue')
    },
    {
        // 主页面
        path: '/index',
        name: 'index',
        component: ()=>import(/*webpackChunkName:'Index'*/'@/page/index/index.vue'),
        redirect: '/userpage',
        children: [
            {//用户列表
                path: '/userpage',
                name: 'userpage',
                component: ()=>import(/*webpackChunkName:'Userpage'*/'@/page/user-page/user.vue')
            },
            {//订单管理
                path:'/order',
                name:'order',
                component: ()=>import(/*webpackChunkName:'Order'*/'@/page/order/order.vue')
            },
            {//菜品管理
                path:'/dishes',
                name:'dishes',
                component: ()=>import(/*webpackChunkName:'Dishes'*/'@/page/dishes/dishes.vue')
            },
            {//上传菜单
                path:'/upload',
                name:'upload',
                component: ()=>import(/*webpackChunkName:'Upload'*/'@/page/dishes-upload/upload.vue')
            },
    ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router