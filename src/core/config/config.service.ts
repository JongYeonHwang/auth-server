import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthConfigService {
  constructor(private configService: ConfigService) {}

  get dbHost(): string {
    return this.configService.get<string>('DB_HOST', 'http://localhost:3306');
  }
  get dbPort(): number {
    return this.configService.get<number>('DB_PROT', 3306);
  }
  get dbName(): string {
    return this.configService.get<string>('DB_NAME', 'Account');
  }
  get dbUser(): string {
    return this.configService.get<string>('DB_USER', 'root');
  }
  get dbPassword(): string {
    return this.configService.get<string>('DB_PASSWORD', 'ABCDEFGH');
  }
}
