import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AuthConfigModule } from './core/config/config.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [AccountModule, AuthConfigModule, DatabaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
