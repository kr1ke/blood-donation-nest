import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { BloodType } from '../../blood-types/entities/blood-type.entity';
import { BloodPoint } from 'src/blood-points/entities/blood-point.entity';
@Entity('BloodRelation')
export class BloodRelation {
  @PrimaryColumn()
  id: number;
  @ManyToOne(() => BloodType, (bloodType) => bloodType.bloodRelations)
  bloodType: BloodType[];
  @ManyToOne(() => BloodPoint, (point) => point.bloodRelations)
  point: BloodPoint[];
  @Column()
  has: boolean;
  @Column()
  need: boolean;
}
