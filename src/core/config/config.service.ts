import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthConfigService {
  constructor(private configSerivce: ConfigService) {}

  get dbEndpoint(): string {
    return this.configSerivce.get<string>(
      'DB_ENDPOINT',
      'http://localhost:3306',
    );
  }
  get dbPort(): string {
    return this.configSerivce.get<string>('DB_PROT', '3306');
  }
  get dbUser(): string {
    return this.configSerivce.get<string>('DB_USER', 'root');
  }
  get dbPassword(): string {
    return this.configSerivce.get<string>('DB_PASSWORD', 'ABCDEFGH');
  }
}
