import { AuthGuard } from "@nestjs/passport";


export class AdminJwtAuthGuard extends AuthGuard('adminJwt') {
    
}