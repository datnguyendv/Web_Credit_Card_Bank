import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AdminJwtAuthGuard } from 'src/utils/guards/admin-jwt-auth.guard';
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

    @UseGuards(JwtAuthGuard)
    @Get('cardtype')
    async searchCardType():Promise<any> {
        return this.cardService.searchCardType();
    }
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    async searchCardByAccount(@Param('id') id: number): Promise<any> {
        return this.cardService.searchCardByAccount(id);
    }

    @UseGuards(AdminJwtAuthGuard)
    @Get()
    async getAllCard(): Promise<any> {
        return this.cardService.getAllCard()
    }

}
