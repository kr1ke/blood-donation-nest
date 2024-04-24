import { Injectable, UnauthorizedException } from "@nestjs/common";
import { DonorsService } from "../donors/donors.service";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly donorsService: DonorsService) {
  }
  async login(loginDto: LoginDto) {
    const user = await this.donorsService.findByLogin(loginDto.login)
    if(!user) {
      throw new UnauthorizedException();
    }
    const isRightPassword = await bcrypt.compare(loginDto.password, user.password)
    if(!isRightPassword) {
      throw new UnauthorizedException();
    }
    return user
  }
}
