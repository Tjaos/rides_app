import { IsString } from "class-validate";
import { IsInt } from "class-validator";

export class CreateCustomerDto {

    @IsInt()
    id: number;
  
    @IsString()
    name: string;
}
