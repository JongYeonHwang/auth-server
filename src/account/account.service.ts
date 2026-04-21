import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  create(): string {
    return 'create user';
  }
  modify(): string {
    return 'modify user';
  }
  inActive(): string {
    return 'inActive user';
  }
  login(): string {
    return 'login user';
  }
  logout(): string {
    return 'logout user';
  }
}
