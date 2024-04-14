import { Injectable } from '@nestjs/common';
import { CreateBloodTypeDto } from './dto/create-blood-type.dto';
import { UpdateBloodTypeDto } from './dto/update-blood-type.dto';

@Injectable()
export class BloodTypesService {
  create(createBloodTypeDto: CreateBloodTypeDto) {
    return 'This action adds a new bloodType';
  }

  findAll() {
    return `This action returns all bloodTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloodType`;
  }

  update(id: number, updateBloodTypeDto: UpdateBloodTypeDto) {
    return `This action updates a #${id} bloodType`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloodType`;
  }
}
