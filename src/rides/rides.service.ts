import { Injectable } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { Repository } from 'typeorm';
import { Ride } from './entities/ride.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../customer/entities/customer.entity';
import { Driver } from '../driver/entities/driver.entity';

@Injectable()
export class RidesService {
  constructor(
    @InjectRepository(Ride)
    private readonly rideRepository: Repository<Ride>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>,
  ){

  }

  
  async create(dto: CreateRideDto) {

    let customer = await this.customerRepository.findOne({ where: { id: dto.customerId } });
    let driver = await this.driverRepository.findOne({ where: { id: dto.driverId } });

    if (!customer) {

      customer = await this.customerRepository.save({
        id: dto.customerId,
        name: 'João Silva',
      });
    }
    if (!driver) {
      driver = await this.driverRepository.save({
        id: dto.driverId,
        name: 'Homer Simpson',
        description: 'Motorista amigável.',
        vehicle: 'Plymouth Valiant',
        rating: '5/5',
        rate_per_km: 2.5,
        min_distance: 1,
      });
    }

    const ride = this.rideRepository.create({
      ...dto,
      driver,
      customer
    });
    return this.rideRepository.save(ride)
  }

  findAll() {
    return this.rideRepository.find()
  }

  findOne(id: number) {
    return this.rideRepository.findOne({ where: { id } });
  }

}
