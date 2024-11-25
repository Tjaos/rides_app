import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryColumn()
  customer_id: number;

  @Column()
  name: string;

}
