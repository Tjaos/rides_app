import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RidesService } from './rides.service';
import { CreateRideDto } from './dto/create-ride.dto';

@Controller('ride')
export class RidesController {
  constructor(private readonly ridesService: RidesService) {}

  @Post('estimate')
  create(@Body() createRideDto: CreateRideDto) {
    return this.ridesService.create(createRideDto);
  }

  @Patch('confirm')
  findAll() {
    return this.ridesService.findAll();
  }

  @Get(':customer_id?driver_id')
  findOne(@Param('id') id: number) {
    return this.ridesService.findOne(id);
  }
  
}
