import jwt_decode from 'jwt-decode';
import { decodeJwtDto, loginInfo } from '../login/login-dto';
import { initialState } from '../login/loginInfoSlice';

export const decodeToken = {
    jwtDecodeTypeFunc: (token: string) => {
        let result:decodeJwtDto = jwt_decode(token);
        return result.type
    },
    checkExpToken: (extoken:string) => {
        let tokenDecoded:decodeJwtDto = jwt_decode(extoken);
        let dateExp = Date.now();
        let loginInfo: loginInfo = initialState;
        console.log("token is expired?: ", dateExp > (tokenDecoded.exp * 1000));
        if(dateExp > tokenDecoded.exp* 1000) {
        //return true mean that token is expired        
        return true
    }
    // loginFunction(loginInfo);
    return false
    },
    getIdFromJwt: (token:string) => {
        let result:decodeJwtDto = jwt_decode(token);
        //sub response from server is accountID
        return result.sub
    }
}