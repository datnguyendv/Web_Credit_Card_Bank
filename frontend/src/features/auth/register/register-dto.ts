
export interface registerFormDto {
    UserName: string,
    Password: string,
    FirstName:string,
    LastName:string,
    Email:string,
    PhoneNumber:number,
    IdentifyCard:number,
    DateOfBirth: string | null | Date ,
    Address: string, 
    day: string, 
    month: string, 
    year: string, 
    type: string,
}

export const registerFormDataDto: registerFormDto = {
    UserName: '',
    Password: '',
    FirstName:'',
    LastName:'',
    Email:'',
    PhoneNumber:0,
    IdentifyCard:0,
    DateOfBirth: '',
    Address: '', 
    day:'',
    month: '',
    year: '',
    type:''
}

export interface registerStateDto {
    token: string,
    status: 'idle' | "isLoading" | "failed",
    errMsg: string
}

export type cardType ={
    CardTypeId:string,
    TypeName: string,
    LineOfDeit: number
}

export interface registerInfoFormDto {
    cardType: cardType[]
    status: 'idle' | "isLoading" | "failed",
    errMsg: string
}

export interface accountRegisterStateDto {
    isExisted: '' | true | false,
    status: 'idle' | "isLoading" | "failed",
    errMsg: string
}
export interface registerFormRequestDto {
    UserName: string,
    Password: string,
    FirstName:string,
    LastName:string,
    PhoneNumber:number,
    IdentifyCard:number,
    DateOfBirth: string | null | Date ,
    Address: string, 
}

export interface cardCreatedStateDto {
    isCreated: '' | true | false,
    status: 'idle' | "isLoading" | "failed",
    errMsg: string
}

export interface createCardInfoDto {
    IdentifyCard: number,
    type:string,
}
