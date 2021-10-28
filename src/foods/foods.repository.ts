import { EntityRepository, Repository } from 'typeorm';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './food.entity';
@EntityRepository(Food)
export class FoodsRepository extends Repository<Food> {
  async getFoods(): Promise<Food[]> {
    const query = this.createQueryBuilder('food');

    const foods = query.getMany();
    return foods;
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
