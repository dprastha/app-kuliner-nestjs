import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OriginsRepository } from './origins.repository';
import { OriginsController } from './origins.controller';
import { OriginsService } from './origins.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([OriginsRepository]), AuthModule],
  controllers: [OriginsController],
  providers: [OriginsService],
})
export class OriginsModule {}
