import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ){

  }
  create(dto: CreateCustomerDto) {
    return this.customerRepository.save({
      id:1,
      name:'João Silva'
    });
  }

  findAll() {
    return this.customerRepository.find()
  }

  findOne(id: number) {
    return this.customerRepository.findOneBy({id});
  }
}
