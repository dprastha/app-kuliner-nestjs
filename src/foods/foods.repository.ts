import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from '../entities/food.entity';
import { Logger } from '@nestjs/common';
import { GetFoodsFilterDto } from './dto/get-foods-filter.dto';
@EntityRepository(Food)
export class FoodsRepository extends Repository<Food> {
  private logger = new Logger('Food Repository', { timestamp: true });
  async getFoods(filterDto: GetFoodsFilterDto): Promise<Food[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder('food').leftJoinAndSelect(
      'food.origin',
      'origin',
    );

    if (search) {
      query.andWhere(
        '(LOWER(food.name) LIKE LOWER(:search) OR LOWER(food.description) LIKE LOWER(:search))',
        { search: `%${search}%` },
      );
    }

    try {
      const foods = query.getMany();
      return foods;
    } catch (error) {
      this.logger.error(`Failed retrieving all food data`), error.stack;
      throw new InternalServerErrorException();
    }
  }

  async createFood(createFoodDto: CreateFoodDto): Promise<Food> {
    const { name, description, origin } = createFoodDto;

    const food = this.create({
      name,
      description,
      origin,
    });

    await this.save(food);
    return food;
  }
}
