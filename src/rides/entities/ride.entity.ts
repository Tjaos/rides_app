import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Customer } from './customer.entity';
import { Driver } from './driver.entity';

@Entity()
export class Ride {
  @PrimaryColumn()
  id: number;

  @Column()
  @ManyToOne(() => Customer, (customer) => customer.customer_id)
  customer: Customer;

  @Column()
  @ManyToOne(() => Driver, (driver) => driver.driver_id)
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
