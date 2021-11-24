
export interface registerFormDto {
    UserName: string,
    Password: string,
    FirstName:string,
    LastName:string,
    PhoneNumber:number,
    IdentifyCard:number,
    DateOfBirth: string | null | Date ,
    Address: string, 
    Day: string, 
    Month: string, 
    Year: string, 
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
    Day:'',
    Month: '',
    Year: '',
}

export interface registerStateDto {
    token: string,
    status: 'idle' | "isLoading" | "failed",
    errMsg: string
}