import { IsNumber } from 'class-validator';

export class inActiveAccountDto {
  @IsNumber()
  readonly userId: number;
}
