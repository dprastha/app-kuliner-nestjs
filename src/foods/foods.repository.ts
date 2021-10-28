import { Origin } from 'src/origins/origin.entity';
import { EntityRepository, Repository, getConnection } from 'typeorm';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './food.entity';
@EntityRepository(Food)
export class FoodsRepository extends Repository<Food> {
  async getFoods(): Promise<Food[]> {
    const foods = await this.createQueryBuilder('foods').getMany();
    // const foods = await getConnection()
    //   .createQueryBuilder()
    //   .relation(Origin, 'foods')
    //   .of()
    //   .loadMany();

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
