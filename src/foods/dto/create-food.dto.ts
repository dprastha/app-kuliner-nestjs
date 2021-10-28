import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Origin } from 'src/origins/origin.entity';

export class CreateFoodDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  origin: Origin;
}
