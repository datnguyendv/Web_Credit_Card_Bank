import { Injectable } from "@nestjs/common";
import { Cards } from "../entities/card.entity";
import { CardStatus } from "../entities/cardStatus.entity";
import { CardRepository } from "../repositories/card.repository";

@Injectable()
export class UpdateCard {
    constructor(
        private cardRepository: CardRepository
    ) {}

    async updateAccountPayment(cardId: number, newBalance: number):Promise<boolean> {
        let result = await this.cardRepository.update(cardId, {CurrentBalance: newBalance});
        return true
    }

    async updateStatusCard(cardId: number, status: CardStatus): Promise<boolean> {
        let result = await this.cardRepository.update(cardId, {CardStatus: status});
        if(result.affected !== 0) {
            return true
        } else 
        return false
    }
}