import axios from 'axios'

export function request(config){
    //创建axios实例
    const instance= axios.create({
        baseURL:'http://127.0.0.1',
        timeout:5000
    })

    //axios的拦截器
    //请求拦截的作用
    instance.interceptors.request.use(config=>{
        return config
    },err=>{
        console.log(err)
    })

    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err);
    })

    //发送真正的网络请求
    return instance(config)
}
