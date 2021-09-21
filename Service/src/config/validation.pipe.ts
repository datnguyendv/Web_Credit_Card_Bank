import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';


@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    //to validate type of data in this enum type or not
    private toValidate(metaType: Function): Boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metaType)
    }

    async transform (value: any, {metatype}: ArgumentMetadata) {
        if (!metatype || this.toValidate(metatype)) {
            return value
        }
        const object = plainToClass(metatype, value);
        const errors = await validate(object);
        if (errors.length > 0) {
            throw new BadRequestException('Validation failed');
        }
        return value;
    }
}