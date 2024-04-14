import { Module } from '@nestjs/common';
import { BloodRelationsService } from './blood-relations.service';
import { BloodRelationsController } from './blood-relations.controller';

@Module({
  controllers: [BloodRelationsController],
  providers: [BloodRelationsService],
})
export class BloodRelationsModule {}
