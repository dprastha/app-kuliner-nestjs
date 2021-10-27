import { Controller, Get, Post } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './food.entity';
import { FoodsService } from './foods.service';

@Controller('foods')
export class FoodsController {
  constructor(private foodService: FoodsService) {}

  @Get()
  getFoods(): Promise<Food[]> {
    return this.foodService.getFoods();
  }

  @Post()
  createFood(createFoodDto: CreateFoodDto): Promise<Food> {
    return this.foodService.createFood(createFoodDto);
  }
}
