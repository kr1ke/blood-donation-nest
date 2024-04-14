import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { BloodPoint } from "src/blood-points/entities/blood-point.entity";
@Entity("City")
export class City {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @OneToMany(() => BloodPoint, bloodPoint => bloodPoint.id)
  bloodPoints: BloodPoint[];
}
