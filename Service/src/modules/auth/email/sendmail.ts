import { BadRequestException, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as nodemailer from 'nodemailer';
import { findUserDto } from 'src/modules/account/dto/account.dto';

dotenv.config();
const {EMAIL_USERNAME, EMAIL_PASSWORD} =process.env;

@Injectable()
export class SendMail {
    constructor(
    ) {}

    async sendMailOtp(email: string, otp:number): Promise<any> {
        console.log(email);
        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
              user: EMAIL_USERNAME, // generated ethereal user
              pass: EMAIL_PASSWORD, // generated ethereal password
            },
        });
        let mailOption = {
            from: 'setopic14banking@gmail.com', // sender address
            to: `${email}`, // list of receivers
            subject: "[BANK NAME]", // Subject line
            html: `<p>Ma OTP cua ban la <b>${otp}</b>. OTP hieu luc trong 90 giay. Tran trong!</p>
                   <p>Your OTP code is <b>${otp}</b>. Just need in 90 seconds. Thankyou!</p>`
        }
        let info = await transporter.sendMail(mailOption, (err,data) => {
            if(err) {
                console.log("SentMailErr(): ",err);
                throw new BadRequestException('can not sent');
            } else {
                console.log("SentMail(): sent");
            }
        })
        return otp
    }
}