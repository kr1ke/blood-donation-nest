import { Injectable } from '@nestjs/common';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Donor } from "./entities/donor.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
@Injectable()
export class DonorsService {
  constructor(@InjectRepository(Donor)
              private repository: Repository<Donor>) {
  }
  async registration(createDonorDto: CreateDonorDto) {
    const hashPassword = await bcrypt.hashSync(createDonorDto.password, 10)
    return this.repository.save({...createDonorDto, password: hashPassword})
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} donor`;
  }
  findByLogin(login: string) {
    return this.repository.findOne({where: {login: login}})
  }

  update(id: number, updateDonorDto: UpdateDonorDto) {
    return `This action updates a #${id} donor`;
  }

  remove(id: number) {
    return `This action removes a #${id} donor`;
  }
}
