import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Origin } from './origin.entity';
import { OriginsRepository } from './origins.repository';
import { OriginsController } from './origins.controller';
import { OriginsService } from './origins.service';

@Module({
  imports: [TypeOrmModule.forFeature([OriginsRepository])],
  controllers: [OriginsController],
  providers: [OriginsService],
})
export class OriginsModule {}
