import { Injectable } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { Repository } from 'typeorm';
import { Ride } from './entities/ride.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RidesService {
  constructor(
    @InjectRepository(Ride)
    private readonly repository: Repository<Ride>){

  }



  create(dto: CreateRideDto) {
    const ride = this.repository.create(dto);
    return this.repository.save(ride)
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
    return this.repository.findOneBy({id})
  }

}
