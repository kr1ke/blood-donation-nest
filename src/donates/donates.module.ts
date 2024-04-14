import { Module } from '@nestjs/common';
import { DonatesService } from './donates.service';
import { DonatesController } from './donates.controller';

@Module({
  controllers: [DonatesController],
  providers: [DonatesService],
})
export class DonatesModule {}
