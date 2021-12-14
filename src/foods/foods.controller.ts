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
import { Food } from '../entities/food.entity';
import { FoodsService } from './foods.service';
import { Logger } from '@nestjs/common';

@Controller('foods')
@UseGuards(AuthGuard())
export class FoodsController {
  private logger = new Logger('Food Controller', { timestamp: true });
  constructor(private foodService: FoodsService) {}

  @Get()
  getFoods(): Promise<Food[]> {
    this.logger.verbose('Retrieving all food data', true);

    return this.foodService.getFoods();
  }

  @Get('/:id')
  getFoodById(@Param('id') id: number): Promise<Food> {
    this.logger.verbose(`Retrieving food with id ${id}`);

    return this.foodService.getFoodById(id);
  }

  @Post()
  createFood(@Body() createFoodDto: CreateFoodDto): Promise<Food> {
    this.logger.verbose(`Create food: ${JSON.stringify(createFoodDto)}`);

    return this.foodService.createFood(createFoodDto);
  }

  @Put('/:id')
  updateFood(
    @Param('id') id: number,
    @Body() updateFoodDto: UpdateFoodDto,
  ): Promise<Food> {
    this.logger.verbose(`Update food: ${JSON.stringify(updateFoodDto)}`);

    return this.foodService.updateFood(id, updateFoodDto);
  }

  @Delete('/:id')
  deleteFood(@Param('id') id: number): Promise<void> {
    this.logger.verbose(`Deleted food with id ${id}`);

    return this.foodService.deleteFood(id);
  }
}
