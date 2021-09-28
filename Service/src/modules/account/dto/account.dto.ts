import { IsInt, isInt, IsString, isString, Length, MaxLength, MinLength } from "class-validator";

export class accountDto {
    @IsInt() 
    @MinLength(10)
    @MaxLength(11)
    AccountID: number;

    @IsString()
    @MinLength(10)
    @MaxLength(20)
    FirstName: string;

    @IsString()
    @MinLength(5)
    @MaxLength(20)
    LastName: string;

    @IsString()
    @MinLength(20)
    Password: string;
    
    @IsString()
    Role: string;
}