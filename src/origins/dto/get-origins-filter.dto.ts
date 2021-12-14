import { IsOptional, IsString } from 'class-validator';

export class GetOriginsFilterDto {
  @IsOptional()
  @IsString()
  search?: string;
}
