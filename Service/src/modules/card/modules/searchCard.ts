
import { BadRequestException, Injectable } from '@nestjs/common';
import { CardSearchByIdDto, cardType, typeCardToSearch } from '../dto/cardType.dto';
import { CardRepository } from '../repositories/card.repository';
import { Cards } from '../entities/card.entity';
import { CardTypeRepository } from '../repositories/cardType.repository';

@Injectable()
export class SearchCard {
    constructor(
        private cardRepository: CardRepository,
        private cardTypeRepository: CardTypeRepository
    ) {}

    findCardTypeId(typeRequest: string) {
        let cardTypeId = ["Normal","Visa", "MasterCard", "VisaDebit"]
        for ( let i in cardTypeId){
            if (typeRequest == cardTypeId[i])
                return Number(i) +1
        }
    }

    async searchOneCard(cardRequest: typeCardToSearch): Promise<any> {
        let cardTypeId = this.findCardTypeId(cardRequest.CardType);
        let cardRes:Cards = await this.cardRepository.findOne({
            where: {
                Account: cardRequest.Account,
                CardType: cardTypeId
            }
        });
        return cardRes
        
    }

    async searchCardByCardId(cardRequest: number): Promise<any> {
        let cardInfo: CardSearchByIdDto = {
            CardID : cardRequest
        }
        let cardRes: Cards = await this.cardRepository.findOne(cardInfo);
        return cardRes
    }

    async searchAllCardType(): Promise<any> {
        return await this.cardTypeRepository.find();
    }

    async searchAllUserCard(id: number): Promise<any> {
        let listCard: Cards[] = await this.cardRepository.find({
            where: {
                Account: id,
            }
        });
        for (let i=0; i < listCard.length -1 ; i++) {
            delete listCard[i].CVV;
        }
        return listCard;
    }
}