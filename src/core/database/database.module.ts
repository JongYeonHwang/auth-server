import { Module } from '@nestjs/common';
import { AuthConfigService } from '../config/config.service';

@Module({
  imports: [AuthConfigService],
})
export class DatabaseModule {
  constructor(private readonly config: AuthConfigService) {}
}
