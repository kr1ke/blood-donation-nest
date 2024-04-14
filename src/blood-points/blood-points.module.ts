import { Module } from '@nestjs/common';
import { BloodPointsService } from './blood-points.service';
import { BloodPointsController } from './blood-points.controller';

@Module({
  controllers: [BloodPointsController],
  providers: [BloodPointsService],
})
export class BloodPointsModule {}
