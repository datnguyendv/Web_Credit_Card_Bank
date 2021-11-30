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
              user: EMAIL_USERNAME, // username of gmail
              pass: EMAIL_PASSWORD, // password of this gmail
            },
        });
        let mailOption = {
            from: 'setopic14banking@gmail.com', // sender address
            to: `${email}`, // list of receivers
            subject: "[IUB Digitalbank] Mã Xác Thực Giao Dịch / Transaction Verification Code", // Subject line
            html: `<p style="font-size:16px;">Mã xác thực là <b>${otp}</b>, có hiệu lực trong vòng 1 phút. Chi tiết giao dịch: Chuyển khoản bằng thẻ trên  website IUB Digibank.</p>

            <p style="font-size:16px;">Đây là email tự động. Quý khách vui lòng không gửi thư vào địa chỉ này. Mọi vướng mắc liên quan đến dịch vụ, Quý khách vui lòng tham khảo tại website InternationalUniversityBank https://portal.iubank.com.vn hoặc liên hệ với Hotline 24/7 theo số 1900545454.</p>

            <p style="font-size:16px;"><b>Cám ơn Quý khách đã sử dụng dịch vụ của InternationalUniversityBank!</b></p>

            <hr>

            <p style="font-size:16px;">Your OTP is <b>${otp}</b>, valid in 1 minutes.Transaction details: Transfer via card on Website of IUB Digibank.</p>
            
            <p style="font-size:16px;">Please do not reply to this automatically-generated email. For further information, please direct your inquiries to: <br>
            - Our website: https://portal.iubank.com.vn <br>
            - Our Hotline 24/7 at 1900 54 54 54</p>

            <p style="font-size:16px;"><b>Thank you for banking with InternationalUniversityBank!</b></p>
            `
            
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