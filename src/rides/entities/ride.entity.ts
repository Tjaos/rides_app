import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from '../../customer/entities/customer.entity';
import { Driver } from '../../driver/entities/driver.entity';

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, (customer) => customer.rides)
  customer: Customer;

  @ManyToOne(() => Driver, (driver) => driver.rides)
  driver: Driver;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column('float')
  distance: number;

  @Column()
  duration: string;

  @Column('float')
  value: number;

  @Column()
  date: Date;
}
