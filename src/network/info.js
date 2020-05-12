import {request} from "./request";

export  function getInfo(type,page) {
    return request({
        url:'/info',
        params:{
            type,
            page
        }
    })
}