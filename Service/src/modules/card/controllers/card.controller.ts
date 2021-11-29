import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/utils/guards/jwt-auth.guard';
import { cardRequestDto, cardType } from '../dto/cardType.dto';
import { CardService } from '../services/card.service';

@Controller('card')
export class CardController {
    constructor(
        private cardService: CardService
    ) {}

    // @UseGuards(JwtAuthGuard)
    @Post() 
    async createBankCard(@Body() request: cardRequestDto): Promise<any>{ 
        return this.cardService.createCard(request);
    }

    @Get('cardtype')
    async searchCardType():Promise<any> {
        return this.cardService.searchCardType();
    }

    @Get(":id")
    async searchCardByAccount(@Param('id') id: number): Promise<any> {
        return this.cardService.searchCardByAccount(id);
    }

}
