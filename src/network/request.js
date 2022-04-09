import axios from "axios";

export function request(config){

    const instance = axios.create({
        method:'post',
        baseURL:'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/classification/classifypic',
        headers:{'Content-Type': 'application/json'},
    })

    return instance(config);

}