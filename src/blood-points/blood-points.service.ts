import { Injectable } from '@nestjs/common';
import { CreateBloodPointDto } from './dto/create-blood-point.dto';
import { UpdateBloodPointDto } from './dto/update-blood-point.dto';

@Injectable()
export class BloodPointsService {
  create(createBloodPointDto: CreateBloodPointDto) {
    return 'This action adds a new bloodPoint';
  }

  findAll() {
    return `This action returns all bloodPoints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloodPoint`;
  }

  update(id: number, updateBloodPointDto: UpdateBloodPointDto) {
    return `This action updates a #${id} bloodPoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloodPoint`;
  }
}
