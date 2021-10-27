import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './food.entity';
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
    // const { name, description, price } = createFoodDto;
    // const food = this.foodsRepository.create({
    //   name,
    //   description,
    //   price,
    // });

    // await this.foodsRepository.save(food);
    // return food;

    return this.foodsRepository.createFood(createFoodDto);
  }
}
