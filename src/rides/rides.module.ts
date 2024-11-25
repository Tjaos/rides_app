import { Module } from '@nestjs/common';
import { RidesService } from './rides.service';
import { RidesController } from './rides.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [RidesController],
  providers: [RidesService],
})
export class RidesModule {}
