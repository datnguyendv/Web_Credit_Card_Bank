import * as dotenv from 'dotenv';
import { internalTransferInfoDto } from "../features/payment/payment-dto";
import axiosClient from "./axios-client";

dotenv.config()

export const { REACT_APP_SENDMAIL } = process.env;

export const sendMailApi = {
    getOTP: (params: number) => {
        const url = `${REACT_APP_SENDMAIL}/${params}`;
        return axiosClient.get(url);
    }
}