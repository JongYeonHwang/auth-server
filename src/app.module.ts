import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';

@Module({
  imports: [AccountModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
