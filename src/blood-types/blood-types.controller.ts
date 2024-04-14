import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BloodTypesService } from './blood-types.service';
import { CreateBloodTypeDto } from './dto/create-blood-type.dto';
import { UpdateBloodTypeDto } from './dto/update-blood-type.dto';

@Controller('blood-types')
export class BloodTypesController {
  constructor(private readonly bloodTypesService: BloodTypesService) {}

  @Post()
  create(@Body() createBloodTypeDto: CreateBloodTypeDto) {
    return this.bloodTypesService.create(createBloodTypeDto);
  }

  @Get()
  findAll() {
    return this.bloodTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloodTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBloodTypeDto: UpdateBloodTypeDto,
  ) {
    return this.bloodTypesService.update(+id, updateBloodTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloodTypesService.remove(+id);
  }
}
