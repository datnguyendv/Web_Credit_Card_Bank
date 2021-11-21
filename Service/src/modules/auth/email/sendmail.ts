import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class SendMail {
    constructor(

    ) {}

    async sendMailOtp(cardId:number): Promise<any> {
        

        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
              user: '', // generated ethereal user
              pass: '', // generated ethereal password
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