import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateOriginDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
