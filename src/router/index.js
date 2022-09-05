import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        // 登录页面
        path: '/',
        name: 'login',
        component: ()=>import(/*webpackChunkName*/'@/page/login/login.vue')
    },
    {
        // 主页面
        path: '/index',
        name: 'index',
        component: ()=>import(/*webpackChunkName*/'@/page/index/index.vue'),
        redirect: '/userpage',
        children: [{
            path: '/userpage',
            name: 'userpage',
            component: ()=>import('@/page/user-page/user.vue')
        }]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router