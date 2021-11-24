import jwt_decode from 'jwt-decode';
import { decodeJwtDto } from '../login/login-dto';

export const jwtDecodeFunc = (token:string) => {
    let result:decodeJwtDto = jwt_decode(token);
    console.log(result.type);
    return result.type
}