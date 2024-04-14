import { PartialType } from '@nestjs/mapped-types';
import { CreateBloodPointDto } from './create-blood-point.dto';

export class UpdateBloodPointDto extends PartialType(CreateBloodPointDto) {}
