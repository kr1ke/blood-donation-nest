import { Injectable } from '@nestjs/common';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Donor } from "./entities/donor.entity";
import { Repository } from "typeorm";

@Injectable()
export class DonorsService {
  constructor(@InjectRepository(Donor)
              private repository: Repository<Donor>) {
  }
  create(createDonorDto: CreateDonorDto) {
    return this.repository.save(createDonorDto)
    // return 'This action adds a new donor';
  }

  findAll() {
    return `This action returns all donors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donor`;
  }

  update(id: number, updateDonorDto: UpdateDonorDto) {
    return `This action updates a #${id} donor`;
  }

  remove(id: number) {
    return `This action removes a #${id} donor`;
  }
}
