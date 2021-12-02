import { EntityRepository, Repository } from 'typeorm';
import { CreateOriginDto } from './dto/create-origin.dto';
import { Origin } from '../entities/origin.entity';

@EntityRepository(Origin)
export class OriginsRepository extends Repository<Origin> {
  async getOrigins(): Promise<Origin[]> {
    const origins = await this.createQueryBuilder('origin').getMany();

    return origins;
  }

  async createOrigin(CreateOriginDto: CreateOriginDto): Promise<Origin> {
    const { name, foodsId } = CreateOriginDto;

    const origin = this.create({
      name,
      foodsId,
    });

    await this.save(origin);
    return origin;
  }
}
