import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-accout.dto';
import { LoginAccountDto } from './dto/login-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  create(createInfo: CreateAccountDto): string {
    return `아이디 : ${createInfo.userName}, 비밀번호 :${createInfo.password}, 닉네임 : ${createInfo.nickName}, 나이 : ${createInfo.age}`;
  }
  update(updateInfo: UpdateAccountDto): string {
    return `${updateInfo.age} 변경완료`;
  }
  inActive(): string {
    return 'inActive user';
  }
  login(loginInfo: LoginAccountDto): string {
    return `loginSuccess ${loginInfo.userName}`;
  }
}
