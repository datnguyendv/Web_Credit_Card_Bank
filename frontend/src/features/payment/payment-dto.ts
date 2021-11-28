export const bankName: string[] = [
'VietinBank', 'VPBank', 'BIDV', 'MB', 'Vietcombank', 'Techcombank','ACB', 'Sacombank', 'SHB', 'HDBank', 'SCB', 'Eximbank', 'SeABank', 'MSB', 'VIB', 'OCB', 'TPBank', 'PVcombank', 'Bac A Bank', 'AB BANK', 'Nam A Bank', 'Saigonbank'
]

export const location: string [] = [
    "An Giang", "Vung Tau", "Tp. HCM", "Bac Lieu", "Soc Trang", "Ha Noi", "Binh Duong", "Can Tho", "Dong Nai", "Gia Lai", "Ha Nam", "Ha Noi", "Hoa Binh", "Lang Son", "Nam Dinh", "Nghe An", "Ha Tinh","Tay Ninh", "Tra Vinh", "Long An", "Vinh Long", "Thua Thien Hue"
] 
export type internalPaymentDto = {
    CardSendId: number,
    CardReceiveId: number,
    Balance: number,
    Description: string,
    OTP: number
}
export type externalPaymentDto = {
    CardSendId: number,
    CardReceiveId: number,
    Bank: string,
    Balance: number,
    Description: string   
}

export type paymentStateDto = {
    state: string,
    status:'idle' | 'isLoading' | 'failed',
    errMsg:'',
}

export type internalTransferInfoDto = {
    CardSendId: number,
    CardReceiveId: number,
    Balance: number,
    Location: string,
}

export type externalTransferInfoDto = {
    CardSendId: number,
    Balance: number,
    Location: string,
}
