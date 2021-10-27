import { EntityRepository, Repository } from 'typeorm';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './food.entity';

@EntityRepository(Food)
export class FoodsRepository extends Repository<Food> {
  async getFoods(): Promise<Food[]> {
    const foods = await this.createQueryBuilder('foods').getMany();
    return foods;
  }

  async createFood(createFoodDto: CreateFoodDto): Promise<Food> {
    const { name, description, price } = createFoodDto;
    const food = this.create({
      name,
      description,
      price,
    });

    await this.save(food);
    return food;
  }
}
