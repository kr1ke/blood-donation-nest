import { Module } from '@nestjs/common';
import { BloodTypesService } from './blood-types.service';
import { BloodTypesController } from './blood-types.controller';

@Module({
  controllers: [BloodTypesController],
  providers: [BloodTypesService],
})
export class BloodTypesModule {}
