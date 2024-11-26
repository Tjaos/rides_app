import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from '../../customer/entities/customer.entity';
import { Driver } from '../../driver/entities/driver.entity';

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

  @Column()
  distance: number;

  @Column()
  duration: string;

  @Column()
  value: number;

  @Column()
  date: Date;
}
