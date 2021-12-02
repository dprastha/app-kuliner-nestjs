import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Food } from '../../entities/food.entity';

export class CreateOriginDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  foodsId: Food[];
}
