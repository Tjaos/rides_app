import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RidesService } from './rides.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';

@Controller('rides')
export class RidesController {
  constructor(private readonly ridesService: RidesService) {}

  @Post('ride/estimate')
  create(@Body() createRideDto: CreateRideDto) {
    return this.ridesService.create(createRideDto);
  }

  @Patch('ride/confirm')
  findAll() {
    return this.ridesService.findAll();
  }

  @Get('ride/:customer_id?driver_id')
  findOne(@Param('id') id: number) {
    return this.ridesService.findOne(id);
  }
}
