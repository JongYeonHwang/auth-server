import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountDto } from './create-accout.dto';
import { IsNumber } from 'class-validator';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {
  @IsNumber()
  readonly userId: number;
}
