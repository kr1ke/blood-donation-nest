import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { BloodRelation } from "../../blood-relations/entities/blood-relation.entity";
import { City } from "src/cities/entities/city.entity";
@Entity("BloodPoint")
export class BloodPoint {
  @PrimaryColumn()
  id: number;
  @Column()
  address: string;
  @ManyToOne(() => City, city => city.id)
  location: number;
  @OneToMany(() => BloodRelation, bloodRelation => bloodRelation.point)
  bloodRelations: BloodRelation[];
}
