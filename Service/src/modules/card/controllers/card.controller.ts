import { Body, Controller, Post } from '@nestjs/common';
import { cardRequestDto, cardType } from '../dto/cardType.dto';
import { CardService } from '../services/card.service';

@Controller('card')
export class CardController {
    constructor(
        private cardService: CardService
    ) {}

    @Post() 
    async createBankCard(@Body() request: cardRequestDto): Promise<any>{ 
        return this.cardService.createCard(request);
    }

}
