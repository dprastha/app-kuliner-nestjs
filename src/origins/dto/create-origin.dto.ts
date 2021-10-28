import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Food } from 'src/foods/food.entity';

export class CreateOriginDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  foods: Food[];
}
