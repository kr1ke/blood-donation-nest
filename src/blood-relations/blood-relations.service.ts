import { Injectable } from '@nestjs/common';
import { CreateBloodRelationDto } from './dto/create-blood-relation.dto';
import { UpdateBloodRelationDto } from './dto/update-blood-relation.dto';

@Injectable()
export class BloodRelationsService {
  create(createBloodRelationDto: CreateBloodRelationDto) {
    return 'This action adds a new bloodRelation';
  }

  findAll() {
    return `This action returns all bloodRelations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloodRelation`;
  }

  update(id: number, updateBloodRelationDto: UpdateBloodRelationDto) {
    return `This action updates a #${id} bloodRelation`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloodRelation`;
  }
}
