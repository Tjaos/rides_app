import { IsDate, IsNumber, IsString } from "class-validate";

export class CreateRideDto {
  
    customerId: number;

    driverId: number;

    @IsString()
    origin: string;
  
    @IsString()
    destination: string;
  
    @IsNumber()
    distance: number;
  
    @IsString()
    duration: string;
  
    @IsNumber()
    value: number;
  
    @IsDate()
    date: Date;

}
