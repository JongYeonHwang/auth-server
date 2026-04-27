import { IsEnum, IsNumber } from 'class-validator';
import { UserStatus } from '../../common/enum/user-status.enum';

export class inActiveAccountDto {
  @IsNumber()
  readonly userId: number;
  @IsEnum(UserStatus)
  readonly status: UserStatus;
}
