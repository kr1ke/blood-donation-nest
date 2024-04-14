import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BloodPointsService } from './blood-points.service';
import { CreateBloodPointDto } from './dto/create-blood-point.dto';
import { UpdateBloodPointDto } from './dto/update-blood-point.dto';

@Controller('blood-points')
export class BloodPointsController {
  constructor(private readonly bloodPointsService: BloodPointsService) {}

  @Post()
  create(@Body() createBloodPointDto: CreateBloodPointDto) {
    return this.bloodPointsService.create(createBloodPointDto);
  }

  @Get()
  findAll() {
    return this.bloodPointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloodPointsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBloodPointDto: UpdateBloodPointDto,
  ) {
    return this.bloodPointsService.update(+id, updateBloodPointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloodPointsService.remove(+id);
  }
}
