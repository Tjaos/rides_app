import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RidesModule } from './rides/rides.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Ride } from './rides/entities/ride.entity';
import { Customer } from './rides/entities/customer.entity';
import { Driver } from './rides/entities/driver.entity';

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
    RidesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
