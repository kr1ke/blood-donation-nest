import { PartialType } from '@nestjs/mapped-types';
import { CreateBloodRelationDto } from './create-blood-relation.dto';

export class UpdateBloodRelationDto extends PartialType(
  CreateBloodRelationDto,
) {}
