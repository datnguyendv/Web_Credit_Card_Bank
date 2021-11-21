import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();
const {EMAIL_USERNAME, EMAIL_PASSWORD} =process.env;

@Injectable()
export class SendMail {
    constructor(

    ) {}

    async sendMailOtp(cardId:number): Promise<any> {
        

        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
              user: EMAIL_USERNAME, // generated ethereal user
              pass: EMAIL_PASSWORD, // generated ethereal password
            },
        });
        let mailOption = {
            from: 'setopic14banking@gmail.com', // sender address
            to: "nguyendatvtvn39@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            html: "<p>Ma OTP cua ban la <b>123456</b>. OTP hieu luc trong 90 giay. Tran trong</p>"
        }
        let info = await transporter.sendMail(mailOption, (err,data) => {
            if(err) {
                console.log("err: ",err);
            } else {
                console.log('sent');
            }
        })
        // console.log(info.messageId);
    }
}