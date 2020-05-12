import  Router from 'vue-router'
import Vue from 'vue'

//懒加载
const Home=()=>import('../views/home/home.vue');
const Main=()=>import('../views/home/main.vue');
const Login=()=>import('../components/common/login.vue');
const Info=()=>import('../views/operations/info');
const Grafana=()=>import('../views/operations/grafana');
const Alert=()=>import('../views/operations/alert');
const ImExcel=()=>import('../views/excel/upload-excel');
const ExpExcel=()=>import('../views/excel/export-excel');


Vue.use(Router)

const routes=[
    {
      path:'/',
      component:Login,
    },
    {
        path: '/home',
        component: Home,
        children:[
            {
                path: '',
                component:Main,
            },
            {
                path:'/info',
                component: Info
            },
            {
                path:'/form',
                component:Grafana
            },
            {
                path:'/alert',
                component:Alert
            },
            {
                path:'/export-excel',
                component:ExpExcel,
            },
            {
                path:'/upload-excel',
                component:ImExcel
            },

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





