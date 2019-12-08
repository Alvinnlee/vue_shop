import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../components/Login')
const Home = () => import('../components/Home')
const Welcome = () => import('../components/Welcome')
const User = () => import('../components/user/User')
const T = () => import('../components/user/T')
const Profile = () => import('../components/user/Profile')
const Ai2 = () => import('../components/user/Ai2')

import axios  from  'axios'



Vue.use(VueRouter)
Vue.prototype.$http = axios


const routes = [
    { path: '',
      redirect: '/login'
    },
    {
        path : '/login',
        component:Login
    },
    {
        path : '/home',
        component:Home,
        redirect: '/welcome',
        children:[
            {
                path : '/welcome',
                component:Welcome
            },
            {
                path : '/user',
                component:User
            },
            // {
            //     path : '/t/:userId',
            //     component:T
            // },
            {
                path : '/t',
                component:T
            },
            {
                path : '/profile',
                component:Profile,
                meta:{
                    title: '首页'
                },
                beforeEnter:( to, from , next) =>{
                    // console.log( 'about')
                    next()
                }
            },
            {
                path : '/ai2',
                component:Ai2
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    // mode: 'history'
})
//导航守卫
router.beforeEach( (to , from , next) =>{
    if( to.path === '/login') return next();
    const token = window.sessionStorage.getItem( "token")
    if( !token) return next( '/login')
    // console.log(to);
    // document.title = to.matched[1].meta.title
    next()
})

router.afterEach( (to, from) =>{
    // console.log('----')
})

export default router
