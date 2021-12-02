import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from '../entities/food.entity';
import { Logger } from '@nestjs/common';
@EntityRepository(Food)
export class FoodsRepository extends Repository<Food> {
  private logger = new Logger('Food Repository', { timestamp: true });
  async getFoods(): Promise<Food[]> {
    const query = this.createQueryBuilder('food');

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
