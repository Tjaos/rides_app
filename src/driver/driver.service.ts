import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Driver } from './entities/driver.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>
  ){

  }
  create(dto: CreateDriverDto) {
    return this.driverRepository.save({
      id: 1,
      name: 'Homer Simpson',
      description: 'Olá! Sou o Homer, seu motorista camarada!',
      vehicle: 'Plymouth Valiant 1973 rosa e enferrujado',
      rating: '2/5 Motorista simpático, mas errou o caminho 3 vezes.',
      rate_per_km: 2.5,
      min_distance: 1,
  });
}

  findAll() {
    return `This action returns all driver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driver`;
  }

}
