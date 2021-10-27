import { IsOptional } from 'class-validator';

export class UpdateFoodDto {
  @IsOptional()
  name: string;

  @IsOptional()
  description: string;
}
