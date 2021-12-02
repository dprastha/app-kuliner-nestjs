import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Origin } from '../../entities/origin.entity';

export class CreateFoodDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  originId: Origin;
}
