import { Module } from '@nestjs/common';
import { DonorsService } from './donors.service';
import { DonorsController } from './donors.controller';
import { Donor } from "./entities/donor.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Donor])],
  controllers: [DonorsController],
  providers: [DonorsService],
})
export class DonorsModule {}
