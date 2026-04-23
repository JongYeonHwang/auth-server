import { IsNumber, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  readonly userName: string;
  @IsString()
  readonly password: string;
  @IsString()
  readonly nickName: string;
  @IsNumber()
  readonly age: number;
}
