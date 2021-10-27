import { EntityRepository, Repository } from 'typeorm';
import { CreateOriginDto } from './dto/create-origin.dto';
import { Origin } from './origin.entity';

@EntityRepository(Origin)
export class OriginsRepository extends Repository<Origin> {
  async getOrigins(): Promise<Origin[]> {
    const origins = await this.createQueryBuilder('origin').getMany();

    return origins;
  }

  async createOrigin(CreateOriginDto: CreateOriginDto): Promise<Origin> {
    const { name } = CreateOriginDto;

    const origin = this.create({
      name,
    });

    await this.save(origin);
    return origin;
  }
}
