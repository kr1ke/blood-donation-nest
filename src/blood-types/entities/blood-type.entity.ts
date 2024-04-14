import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { BloodRelation } from "../../blood-relations/entities/blood-relation.entity";

@Entity("BloodType")
export class BloodType {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @OneToMany(() => BloodRelation, bloodRelation => bloodRelation.bloodType)
  bloodRelations: BloodRelation[];
}
