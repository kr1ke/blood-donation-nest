import { BloodType } from "src/blood-types/entities/blood-type.entity";
import { City } from "src/cities/entities/city.entity";
import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";

@Entity("Donor")
export class Donor {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @OneToOne(() => BloodType, bloodType => bloodType.id)
  bloodType?: BloodType;
  @OneToOne(() => City, city => city.id)
  city?: City;
  @Column({nullable: true})
  counter?: number;
  @Column({ unique: true })
  login: string;
  @Column()
  password: string;
}
