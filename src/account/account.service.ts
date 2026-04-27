import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-accout.dto';
import { LoginAccountDto } from './dto/login-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async testGet(Dto: LoginAccountDto): Promise<User> {
    const userInfo = await this.userRepository.findOne({
      where: { userName: Dto.userName, password: Dto.password },
    });
    if (!userInfo) throw new NotFoundException('로그인불가');
    return userInfo;
  }
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
