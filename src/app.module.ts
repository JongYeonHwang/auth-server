import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AuthConfigModule } from './core/config/config.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [AuthConfigModule, DatabaseModule, AccountModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
