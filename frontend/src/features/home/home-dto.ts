
export type userInfoDto = {
    AccountId: number,
    FirstName: string,
    LastName: string,
    Email: string,
    UserName: string,
    PhoneNumber: number,
    IdentifyCard: number,
    DateOfBirth: string,
    Address: string,
}

export const userInfoInitial = {
    AccountId: 0,
    FirstName: '',
    LastName: '',
    Email: '',
    UserName: '',
    PhoneNumber: 0,
    IdentifyCard: 0,
    DateOfBirth: '',
    Address: '',
}

export type userInfoStateDto = {
    status: 'idle' | 'isLoading' | 'failed',
    errMsg: string,
    accountInfo: userInfoDto
}

export type cardTypeDto = {
    CardTypeId: number,
    TypeName: string,
    LineOfDebit: number
}

export type cardStatusDto = {
    StatusID: number,
    StatusName: string
}

export type cardInfoDto = {
    CardID: number,
    CurrentBalance: number,
    DateOfExpired: string,
    CardType: cardTypeDto,
    CardStatus: cardStatusDto,
}

export type listCardInfoDto = cardInfoDto[]

export type cardInfoStateDto = {
    status: 'idle' | 'isLoading' | 'failed',
    errMsg: string,
    cardInfo: listCardInfoDto
}