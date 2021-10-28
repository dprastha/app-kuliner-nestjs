import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Food } from './food.entity';
import { FoodsService } from './foods.service';

@Controller('foods')
@UseGuards(AuthGuard())
export class FoodsController {
  constructor(private foodService: FoodsService) {}

  @Get()
  getFoods(): Promise<Food[]> {
    return this.foodService.getFoods();
  }

  @Get('/:id')
  getFoodById(@Param('id') id: number): Promise<Food> {
    return this.foodService.getFoodById(id);
  }

  @Post()
  createFood(@Body() createFoodDto: CreateFoodDto): Promise<Food> {
    return this.foodService.createFood(createFoodDto);
  }

  @Put('/:id')
  updateFood(
    @Param('id') id: number,
    @Body() updateFoodDto: UpdateFoodDto,
  ): Promise<Food> {
    return this.foodService.updateFood(id, updateFoodDto);
  }

  @Delete('/:id')
  deleteFood(@Param('id') id: number): Promise<void> {
    return this.foodService.deleteFood(id);
  }
}
