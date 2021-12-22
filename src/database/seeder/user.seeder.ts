import { Seeder } from 'typeorm-seeding';
import { Factory } from 'typeorm-seeding';
import { User } from '../../entities/user.entity';

export class UserSeeder implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(User)().createMany(1);
  }
}
