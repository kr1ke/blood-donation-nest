import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Document")
export class Document {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
}
