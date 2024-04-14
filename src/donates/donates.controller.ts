import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonatesService } from './donates.service';
import { CreateDonateDto } from './dto/create-donate.dto';
import { UpdateDonateDto } from './dto/update-donate.dto';

@Controller('donates')
export class DonatesController {
  constructor(private readonly donatesService: DonatesService) {}

  @Post()
  create(@Body() createDonateDto: CreateDonateDto) {
    return this.donatesService.create(createDonateDto);
  }

  @Get()
  findAll() {
    return this.donatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonateDto: UpdateDonateDto) {
    return this.donatesService.update(+id, updateDonateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donatesService.remove(+id);
  }
}
