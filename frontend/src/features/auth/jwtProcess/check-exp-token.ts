
import jwt_decode from 'jwt-decode';
import { decodeJwtDto, loginInfo } from '../login/login-dto';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { loginFunction, selectLoginState } from '../login/loginSlice';
import { initialState, selectLoginInfoState } from '../login/loginInfoSlice';
import { useDispatch, useSelector } from 'react-redux';

export const checkExpToken = (extoken:string):boolean => {
    let tokenDecoded:decodeJwtDto = jwt_decode(extoken);
    let dateExp = Date.now();
    let loginInfo: loginInfo = initialState;
    console.log(dateExp, tokenDecoded.exp * 100);
    if(dateExp > tokenDecoded.exp* 1000) {
        //return true mean that token is not expired        
        return true
    }
    loginFunction(loginInfo);
    return true
}