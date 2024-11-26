import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RidesModule } from './rides/rides.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Ride } from './rides/entities/ride.entity';
import { Customer } from './customer/entities/customer.entity';
import { Driver } from './driver/entities/driver.entity';
import { CustomerModule } from './customer/customer.module';
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.rides.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }), 
    TypeOrmModule.forFeature([Ride, Customer, Driver]),
    ConfigModule.forRoot({
      isGlobal: true}), 
    RidesModule, CustomerModule, DriverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
