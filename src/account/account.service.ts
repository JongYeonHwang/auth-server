import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  create(): string {
    return 'create user';
  }
  login(): string {
    return 'login user';
  }
  logout(): string {
    return 'logout user';
  }
}
