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
import { DatabaseSeederService } from './database-seeder/database-seeder.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'minha_aplicacao',
      autoLoadEntities: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }), 
    TypeOrmModule.forFeature([Ride, Customer, Driver]),
    RidesModule, CustomerModule, DriverModule],
  controllers: [AppController],
  providers: [AppService, DatabaseSeederService],
})
export class AppModule {}
