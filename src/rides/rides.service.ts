import { Injectable } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { Repository } from 'typeorm';
import { Ride } from './entities/ride.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Driver } from './entities/driver.entity';

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

    const customer = await this.customerRepository.findOne({ where: { id: dto.customerId } });
    const driver = await this.driverRepository.findOne({ where: { id: dto.driverId } });

    if (!customer || !driver) {
      throw new Error('Customer or Driver not found');
    }

    const ride = this.rideRepository.create({
      ...dto,
      customer,
      driver});
    return this.rideRepository.save(ride)
  }

  findAll() {
    return this.rideRepository.find()
  }

  findOne(id: number) {
    return this.rideRepository.findOne({ where: { id } });
  }

}
