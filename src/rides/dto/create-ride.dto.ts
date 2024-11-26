import { Transform } from "class-transformer";
import { IsDate, IsString } from "class-validate";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateRideDto {
  
    @IsInt()
    customerId: number;

    @IsInt()
    driverId: number;


    @IsString()
    @IsNotEmpty()
    origin: string;
  
    @IsString()
    @IsNotEmpty()
    destination: string;
  

    @Transform(({ value }) => parseFloat(value))
    distance: number;
  
    @IsString()
    @IsNotEmpty()
    duration: string;
  

    @Transform(({ value }) => parseFloat(value))
    value: number;
  
    @IsDate()
    date: Date;

}
