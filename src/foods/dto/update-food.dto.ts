import { IsOptional, IsString } from 'class-validator';
import { Origin } from '../../entities/origin.entity';

export class UpdateFoodDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  originId: Origin;
}
