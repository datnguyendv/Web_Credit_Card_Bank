import * as dotenv from 'dotenv';
import axiosClient from "./axios-client";

dotenv.config()

export const { REACT_APP_CARD, REACT_APP_ACCOUNT } = process.env;

export const homeApi = {
    getAccountById: (id: number) => {
        let url = `${REACT_APP_ACCOUNT}/${id}`;
        return axiosClient.get(url);
    },
    getCardById: (id: number) => {
        let url = `${REACT_APP_CARD}/${id}`;
        return axiosClient.get(url);
    }
}