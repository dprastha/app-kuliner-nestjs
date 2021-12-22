import { define } from 'typeorm-seeding';
import * as Faker from 'faker';
import { Food } from '../../entities/food.entity';

define(Food, (faker: typeof Faker) => {
  const foodName = faker.commerce.productName();
  const foodDesc = faker.commerce.color();

  const food = new Food();
  food.name = foodName;
  food.description = foodDesc;
  food.created_at = new Date();
  return food;
});
