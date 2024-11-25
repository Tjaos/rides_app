import { IsDate, IsNumber, IsString } from "class-validate";
import { IsDecimal, IsInt, IsNotEmpty } from "class-validator";

export class CreateRideDto {
  
    @IsInt()
    @IsNotEmpty()
    customerId: number;

    @IsInt()
    @IsNotEmpty()
    driverId: number;


    @IsString()
    @IsNotEmpty()
    origin: string;
  
    @IsString()
    @IsNotEmpty()
    destination: string;
  
    @IsDecimal()
    distance: number;
  
    @IsString()
    @IsNotEmpty()
    duration: string;
  
    @IsDecimal()
    value: number;
  
    @IsDate()
    date: Date;

}
