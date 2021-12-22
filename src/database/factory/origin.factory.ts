import { define } from 'typeorm-seeding';
import { Origin } from '../../entities/origin.entity';
import * as Faker from 'faker';

define(Origin, (faker: typeof Faker) => {
  const cityName = faker.address.city();

  const origin = new Origin();
  origin.name = cityName;
  origin.created_at = new Date();
  return origin;
});
