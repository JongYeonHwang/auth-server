import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
  @Get('/create')
  create() {
    return this.accountService.create();
  }
  @Get('/modify')
  modify() {
    return this.accountService.modify();
  }
  @Get('/inActive')
  inActive() {
    return this.accountService.inActive();
  }
  @Get('/login')
  login() {
    return this.accountService.login();
  }
  @Get('/logout')
  logout() {
    return this.accountService.logout();
  }
}
