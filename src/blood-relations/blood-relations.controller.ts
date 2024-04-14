import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BloodRelationsService } from './blood-relations.service';
import { CreateBloodRelationDto } from './dto/create-blood-relation.dto';
import { UpdateBloodRelationDto } from './dto/update-blood-relation.dto';

@Controller('blood-relations')
export class BloodRelationsController {
  constructor(private readonly bloodRelationsService: BloodRelationsService) {}

  @Post()
  create(@Body() createBloodRelationDto: CreateBloodRelationDto) {
    return this.bloodRelationsService.create(createBloodRelationDto);
  }

  @Get()
  findAll() {
    return this.bloodRelationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloodRelationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBloodRelationDto: UpdateBloodRelationDto,
  ) {
    return this.bloodRelationsService.update(+id, updateBloodRelationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloodRelationsService.remove(+id);
  }
}
