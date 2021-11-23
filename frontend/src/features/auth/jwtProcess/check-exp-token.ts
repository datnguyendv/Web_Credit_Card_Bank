
import jwt_decode from 'jwt-decode';
import { decodeJwtDto } from '../login/login-dto';

export const checkExpToken = (token:string):boolean => {
    let tokenDecoded:decodeJwtDto = jwt_decode(token);
    let dateExp = Date.now();
    console.log(dateExp, tokenDecoded.exp * 100);
    if(dateExp > tokenDecoded.exp* 1000) {
        console.log(false);
        return false
    }
    return true
}