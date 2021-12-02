import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Food } from '../entities/food.entity';
import { FoodsRepository } from './foods.repository';

@Injectable()
export class FoodsService {
  constructor(
    @InjectRepository(FoodsRepository)
    private foodsRepository: FoodsRepository,
  ) {}

  getFoods(): Promise<Food[]> {
    return this.foodsRepository.getFoods();
  }

  createFood(createFoodDto: CreateFoodDto): Promise<Food> {
    return this.foodsRepository.createFood(createFoodDto);
  }

  async getFoodById(id: number): Promise<Food> {
    const found = await this.foodsRepository.findOne(id);

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  async updateFood(id: number, updateFoodDto: UpdateFoodDto): Promise<Food> {
    const { name, description } = updateFoodDto;
    const food = await this.getFoodById(id);

    food.name = name;
    food.description = description;

    await this.foodsRepository.save(food);
    return food;
  }

  async deleteFood(id: number): Promise<void> {
    const result = await this.foodsRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException();
    }
  }
}
