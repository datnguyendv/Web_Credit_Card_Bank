
export type userInfoDto = {
    AccountId: number,
    FirstName: string,
    LastName: string,
    Email: string,
    UserName: string,
    PhoneNumber: number,
    IdentifyCard: number,
    DateOfBirth: Date,
    Address: string,
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
    CVV: number,
    DateOfExpired: string,
    CardType: cardTypeDto,
    CardStatus: cardStatusDto,
}

export type listCardInfoDto = cardInfoDto[]