import { Transform } from "class-transformer";
import { IsDate, IsString } from "class-validate";
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
