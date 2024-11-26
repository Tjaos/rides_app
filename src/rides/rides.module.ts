import { Module } from '@nestjs/common';
import { RidesService } from './rides.service';
import { RidesController } from './rides.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ride } from './entities/ride.entity';
import { Customer } from '../customer/entities/customer.entity';
import { Driver } from '../driver/entities/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ride, Customer, Driver]),  HttpModule],
  controllers: [RidesController],
  providers: [RidesService],
})
export class RidesModule {}
