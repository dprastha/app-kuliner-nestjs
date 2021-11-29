import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodsController } from './foods.controller';
import { FoodsService } from './foods.service';
import { FoodsRepository } from './foods.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([FoodsRepository]), AuthModule],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class FoodsModule {}
