import { IsOptional, IsString } from 'class-validator';
import { Origin } from 'src/origins/origin.entity';

export class UpdateFoodDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  origin: Origin;
}
