export interface forgotPassDto {
    UserName: string,
    ID: number,
    Email: string,
}
export interface changePassDto extends forgotPassDto {
    NewPassword: string,
    Status: 'Change Password' | 'forgot password',
}

export type changePassState = {
    state: string,
    status: 'idle' | 'isLoading' | 'failed',  
    errMsg: string
}