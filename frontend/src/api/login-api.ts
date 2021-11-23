import { loginInfo } from "../features/auth/login/login-dto";
import * as dotenv from 'dotenv'
import axiosClient from "./axios-client";

dotenv.config()

export const { REACT_APP_LOGIN_URL } = process.env;

export const loginApi = {
    postLogin: (params: loginInfo) => {
        const url = `${REACT_APP_LOGIN_URL}`;
        return axiosClient.post(url, params)
    }
}