import { BadRequestException, Injectable } from '@nestjs/common';
import { cardRequestDto, CardSearchByIdDto, cardType, lockCardDto, typeCardToSearch } from '../dto/cardType.dto';
import { CreateNewCard, SearchCard } from '../modules';
import { findUserDto } from 'src/modules/account/dto/account.dto';
import { AccountService } from 'src/modules/account/services/account.service';
import { User } from 'src/modules/account/entities/account.entity';
import { Cards } from '../entities/card.entity';
import { CardStatus } from '../entities/cardStatus.entity';
import { UpdateCard } from 'src/modules/card/modules';


@Injectable()
export class CardService {
    constructor(
        private createNewCard: CreateNewCard,
        private accountService: AccountService,
        private searchCardFunction: SearchCard,
        private updateCard: UpdateCard,
    ) {}

    async searchCardByType(cardRequest: typeCardToSearch): Promise<any> {
        return this.searchCardFunction.searchOneCard(cardRequest);
    }

    async createCard(cardRequest: cardRequestDto): Promise<any> {
        let {type,...findUser} = cardRequest;
        console.log(findUser);
        let UserRes:User = await this.accountService.findUserByIdentifyCard(findUser);
        let findCard:typeCardToSearch = {
            Account: UserRes.AccountId,
            CardType: cardRequest.type
        }
        let cardRes: Cards = await this.searchCardByType(findCard);
        if(cardRes !== undefined) {
            throw new BadRequestException("Card Existed");
        } else {
            return this.createNewCard.createNewCard(findCard);
        }
    }

    async searchCardType():Promise<any> {
        return await this.searchCardFunction.searchAllCardType();
    }

    async searchCardByAccount(id: number): Promise<any> {
        return await this.searchCardFunction.searchAllUserCard(id);
    }

    async getAllCard(): Promise<any> {
        return await this.searchCardFunction.getAllCard();
    }

    async lockCard(params: lockCardDto): Promise<any> {
        let cardStatus: CardStatus[] = await this.searchCardFunction.searchAllCardStatus();
        let cardStatusTemp: CardStatus;
        for(let i=0; i< cardStatus.length; i++) {
            if(cardStatus[i].StatusName === params.StatusName) {
                cardStatusTemp = cardStatus[i];
            }
        }
        let result: boolean= await this.updateCard.updateStatusCard(params.CardID, cardStatusTemp);
        if(result === true) {
            return true 
        } else {
            throw new BadRequestException('Failed')
        }
    }
}
