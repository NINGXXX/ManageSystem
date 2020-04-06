import  Router from 'vue-router'
import Vue from 'vue'

//懒加载
const Home=()=>import('../views/home/home.vue');
const Main=()=>import('../views/home/main.vue');
const Login=()=>import('../components/common/login.vue');
const Info=()=>import('../views/operations/info');
// const UserInfos=()=>import('../views/nav1/user');
// const Tables=()=>import('../views/nav1/Table');
// const Form=()=>import('../views/nav1/Form');


Vue.use(Router)

const routes=[
    {
      path:'/login',
      component:Login,
    },
    {
        path: '/',
        component: Home,
        children:[
            {
                path: '',
                component:Main,
            },
            {
                path:'info',
                component: Info
            },
            // {
            //     path:'form',
            //     component:Form
            // },
            // {
            //     path:'table',
            //     component:Tables
            // },
            // {
            //     path:'user',
            //     component:UserInfos
            // },
        ]
    },
]

const router = new Router({
    routes,
    mode:'history'
})

export default router





