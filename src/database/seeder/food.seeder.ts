import { Seeder } from 'typeorm-seeding';
import { Factory } from 'typeorm-seeding';
import { Food } from '../../entities/food.entity';

export class FoodSeeder implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(Food)().createMany(10);
  }
}
