import { request } from "./request";

export  function  getResult(access_token,imageBast64){
    const data = {
        image:imageBast64,
        top_num:6
    }
    const config = {
        data,
        params:{
            access_token,
        }
    }
    return request(config)

}