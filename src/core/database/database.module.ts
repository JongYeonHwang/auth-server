import { Module } from '@nestjs/common';
import { AuthConfigService } from '../config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [AuthConfigService],
      useFactory: (config: AuthConfigService) => ({
        type: 'mysql',
        host: config.dbHost,
        port: config.dbPort,
        name: config.dbName,
        username: config.dbUser,
        password: config.dbPassword,
        autoLoadEntities: true,
        timezone: '+09:00',
      }),
    }),
  ],
})
export class DatabaseModule {}
