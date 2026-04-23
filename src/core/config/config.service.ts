import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthConfigService {
  constructor(private configSerivce: ConfigService) {}

  get dbEndpoint(): string {
    const endpoint = this.configSerivce.get<string>('DB_ENDPOINT');
    if (!endpoint) throw new Error('DB_ENDPOINT is not defined');
    return endpoint;
  }
  get dbPort(): string {
    const port = this.configSerivce.get<string>('DB_PROT');
    if (!port) throw new Error('DB_PORT is not defined');
    return port;
  }
  get dbUser(): string {
    const user = this.configSerivce.get<string>('DB_USER');
    if (!user) throw new Error('DB_PASSWORD is not defined');
    return user;
  }
  get dbPassword(): string {
    const password = this.configSerivce.get<string>('DB_PASSWORD');
    if (!password) throw new Error('DB_PASSWORD is not defined');
    return password;
  }
}
