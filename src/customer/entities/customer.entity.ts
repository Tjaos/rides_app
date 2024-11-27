import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Ride } from 'src/rides/entities/ride.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Ride, (ride) => ride.customer)
  rides: Ride[];
}
