import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Origin } from './origin.entity';
import { OriginsRepository } from './origins.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Origin])],
})
export class OriginsModule {}
