import { IsNotEmpty } from 'class-validator';

export class CreateFoodDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}
