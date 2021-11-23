
export interface registerFormDto {
    UserName: string,
    Password: string,
    FirstName:string,
    LastName:string,
    PhoneNumber:number,
    IdentifyCard:number,
    DateOfBirth: string | null | Date ,
    Address: string, 
}

export const registerFormDataDto: registerFormDto = {
    UserName: '',
    Password: '',
    FirstName:'',
    LastName:'',
    PhoneNumber:0,
    IdentifyCard:0,
    DateOfBirth: '',
    Address: '', 
}