import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-accout.dto';
import { LoginAccountDto } from './dto/login-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { inActiveAccountDto } from './dto/inActive-account.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  testGet() {}
  async create(dto: CreateAccountDto): Promise<User> {
    const userInfo = this.userRepository.create(dto);
    const createInfo = this.userRepository.save(userInfo);
    return createInfo;
  }
  async update(dto: UpdateAccountDto): Promise<User> {
    const userInfo = await this.userRepository.findOne({
      where: { userId: dto.userId },
    });
    if (!userInfo) throw new NotFoundException('찾을 수 없는 ID');
    Object.assign(userInfo, dto);
    return this.userRepository.save(userInfo);
  }
  async inActive(dto: inActiveAccountDto): Promise<User> {
    const userInfo = await this.userRepository.findOne({
      where: { userId: dto.userId },
    });
    if (!userInfo) throw new NotFoundException('찾을 수 없는 ID');
    userInfo.status = dto.status;
    Object.assign(userInfo, dto);
    return this.userRepository.save(userInfo);
  }
  async login(dto: LoginAccountDto): Promise<User> {
    const userInfo = await this.userRepository.findOne({
      where: { userName: dto.userName, password: dto.password },
    });
    if (!userInfo) throw new NotFoundException('로그인불가');
    return userInfo;
  }
}
