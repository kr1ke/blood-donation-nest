import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BloodPoint } from "src/blood-points/entities/blood-point.entity";
import { Donor } from "src/donors/entities/donor.entity";
import { Document } from "src/documents/entities/document.entity";
@Entity("Donate")
export class Donate {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;
  @OneToOne(() => Donor, donor => donor.id)
  donor: Donor;
  @OneToOne(() => BloodPoint, bloodPoint => bloodPoint.id)
  bloodPoint: BloodPoint;
  @OneToOne(() => Document, document => document.id)
  document: Document;
}
