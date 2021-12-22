import { Seeder } from 'typeorm-seeding';
import { Factory } from 'typeorm-seeding';
import { Origin } from '../../entities/origin.entity';

export class OriginSeeder implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(Origin)().createMany(10);
  }
}
