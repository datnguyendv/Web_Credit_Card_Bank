import { IsDate, IsEAN, IsEmail, IsInt, isInt, IsString, isString, length, Length, MaxLength, MinLength } from "class-validator";


export class AccountRegisterDto {
    @IsString()
    @MaxLength(20)
    FirstName: string;

    @IsString()
    @MaxLength(20)
    LastName: string;

    @IsEmail()
    Email:string;

    @IsString()
    @MaxLength(20)
    UserName:string;

    @IsString()
    @MaxLength(20)
    Password:string;

    @IsInt()
    @MaxLength(10)
    PhoneNumber: number;

    @IsInt()
    @MinLength(10)
    @MaxLength(12)
    IdentifyCard:number;

    @IsDate()
    DateOfBirth: string;

    @IsString()
    @MaxLength(50)
    Address: string;
}

export class AccountLoginDto {
        @IsString()
        @MaxLength(20)
        UserName:string;
    
        @IsString()
        @MaxLength(20)
        Password: string;
    
}

export type AccountInfoResponse = {
    FirstName: string,
    LastName: string, 
    Email:string,
    PhoneNumber: number,
    IdentifyCard:number,
    DateOfBirth: string,
    Address: string,
}