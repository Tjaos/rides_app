import { IsString } from "class-validate";
import { IsInt } from "class-validator";

export class CreateDriverDto {

    @IsInt()
    id: number;
  
    @IsString()
    name: string;
  
    @IsString()
    description: string;
  
    @IsString()
    vehicle: string;
  
    @IsString()
    rating: string;
  
    rate_per_km: number;
  
    min_distance: number;
}
