import { EntityRepository, Repository } from 'typeorm';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './food.entity';
@EntityRepository(Food)
export class FoodsRepository extends Repository<Food> {
  async getFoods(): Promise<Food[]> {
    const foods = this.createQueryBuilder('food').getMany();

    return foods;
  }

  async createFood(createFoodDto: CreateFoodDto): Promise<Food> {
    const { name, description } = createFoodDto;

    const food = this.create({
      name,
      description,
    });

    await this.save(food);
    return food;
  }
}
