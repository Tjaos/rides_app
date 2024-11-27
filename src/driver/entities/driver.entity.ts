import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ride } from 'src/rides/entities/ride.entity';

@Entity('drivers')
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  vehicle: string;

  @Column()
  rating: string;

  @Column('float')
  rate_per_km: number;

  @Column('float')
  min_distance: number;

  // Relacionamento de um-para-muitos com a entidade Ride
  @OneToMany(() => Ride, (ride) => ride.driver)
  rides: Ride[]; // Agora a propriedade 'rides' existe no Driver
}
