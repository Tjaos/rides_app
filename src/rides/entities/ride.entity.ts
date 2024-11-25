import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from './customer.entity';
import { Driver } from './driver.entity';

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, (customer) => customer.id)
  customer: Customer;

  @ManyToOne(() => Driver, (driver) => driver.id)
  driver: Driver;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column('decimal')
  distance: number;

  @Column()
  duration: string;

  @Column('decimal')
  value: number;

  @Column()
  date: Date;
}
