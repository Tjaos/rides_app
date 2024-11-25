import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Driver {
  @PrimaryColumn()
  driver_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  vehicle: string;

  @Column()
  rating: number;

  @Column()
  rate_per_km: number;

  @Column()
  min_distance: number;
}
