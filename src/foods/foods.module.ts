import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodsController } from './foods.controller';
import { FoodsService } from './foods.service';
import { FoodsRepository } from './foods.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FoodsRepository])],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class FoodsModule {}
