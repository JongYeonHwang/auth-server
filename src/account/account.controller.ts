import { Body, Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-accout.dto';
import { LoginAccountDto } from './dto/login-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { inActiveAccountDto } from './dto/inActive-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
  @Post()
  testGet() {}
  @Post('/create')
  create(@Body() createInfo: CreateAccountDto) {
    return this.accountService.create(createInfo);
  }
  @Post('/update')
  update(@Body() updateInfo: UpdateAccountDto) {
    return this.accountService.update(updateInfo);
  }
  @Post('/inActive')
  inActive(@Body() inActiveInfo: inActiveAccountDto) {
    return this.accountService.inActive(inActiveInfo);
  }
  @Post('/login')
  login(@Body() loginInfo: LoginAccountDto) {
    return this.accountService.login(loginInfo);
  }
}
