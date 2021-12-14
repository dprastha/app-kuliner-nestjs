import { IsOptional, IsString } from 'class-validator';

export class GetFoodsFilterDto {
  @IsOptional()
  @IsString()
  search?: string;
}
