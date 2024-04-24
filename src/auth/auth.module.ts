import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DonorsModule } from "../donors/donors.module";

@Module({
  imports: [DonorsModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
