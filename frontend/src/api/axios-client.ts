import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

const {SERVER_URL} = process.env;


const axiosClient = axios.create({
    baseURL: SERVER_URL,
    headers: {
        // 'content-type': 'application/json',
    },
    paramsSerializer: params =>  {
        let test = Object.values(params).join('/');
        console.log(test);
        
        return test;
    },
    data: (data:any) => JSON.stringify(data),
});