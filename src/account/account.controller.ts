import { Body, Controller, Patch, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-accout.dto';
import { LoginAccountDto } from './dto/login-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
  @Post('/create')
  create(@Body() createInfo: CreateAccountDto) {
    return this.accountService.create(createInfo);
  }
  @Patch('/update')
  update(@Body() updateInfo: UpdateAccountDto) {
    return this.accountService.update(updateInfo);
  }
  @Patch('/inActive')
  inActive() {
    return this.accountService.inActive();
  }
  @Post('/login')
  login(@Body() loginInfo: LoginAccountDto) {
    return this.accountService.login(loginInfo);
  }
}
