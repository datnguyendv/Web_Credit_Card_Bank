import { BadRequestException, Injectable } from '@nestjs/common';
import { cardRequestDto, cardType, typeCardToSearch } from '../dto/cardType.dto';
import { CreateNewCard, SearchCard } from '../modules';
import { findUserDto } from 'src/modules/account/dto/account.dto';
import { AccountService } from 'src/modules/account/services/account.service';
import { User } from 'src/modules/account/entities/account.entity';
import { Cards } from '../entities/card.entity';


@Injectable()
export class CardService {
    constructor(
        private createNewCard: CreateNewCard,
        private accountService: AccountService,
        private searchCardFunction: SearchCard
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
}
