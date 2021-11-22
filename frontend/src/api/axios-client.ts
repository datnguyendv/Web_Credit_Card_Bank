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

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    // const token = store.getState().auth.token;
    // console.log(token);
    
    // config.headers.Authorization = token;
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    // Handle errors
    throw error;
});

export default axiosClient;