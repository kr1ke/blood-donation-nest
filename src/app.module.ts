import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BloodPointsModule } from "./blood-points/blood-points.module";
import { BloodPoint } from "./blood-points/entities/blood-point.entity";
import { BloodTypesModule } from "./blood-types/blood-types.module";
import { BloodType } from "./blood-types/entities/blood-type.entity";
import { BloodRelationsModule } from "./blood-relations/blood-relations.module";
import { BloodRelation } from "./blood-relations/entities/blood-relation.entity";
import { City } from "./cities/entities/city.entity";
import { DonorsModule } from "./donors/donors.module";
import { Donor } from "./donors/entities/donor.entity";
import { DonatesModule } from "./donates/donates.module";
import { DocumentsModule } from "./documents/documents.module";
import { Donate } from "./donates/entities/donate.entity";
import { Document } from "./documents/entities/document.entity";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BloodPointsModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./main.db",
      entities: [BloodPoint, BloodType, BloodRelation, City, Donor, Donate, Document],
      synchronize: true,
    }),
    BloodTypesModule,
    BloodRelationsModule,
    DonorsModule,
    DonatesModule,
    DocumentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
