import { EntityRepository, Repository } from 'typeorm';
import { CreateOriginDto } from './dto/create-origin.dto';
import { Origin } from '../entities/origin.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { GetOriginsFilterDto } from './dto/get-origins-filter.dto';

@EntityRepository(Origin)
export class OriginsRepository extends Repository<Origin> {
  private logger = new Logger('Origin Repository', { timestamp: true });
  async getOrigins(filterDto: GetOriginsFilterDto): Promise<Origin[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder('origin').leftJoinAndSelect(
      'origin.foods',
      'foods',
    );

    if (search) {
      query.andWhere('(LOWER(origin.name) LIKE LOWER(:search))', {
        search: `%${search}%`,
      });
    }

    try {
      const origins = query.getMany();
      return origins;
    } catch (error) {
      this.logger.error(`Failed retrieving all origin data`), error.stack;
      throw new InternalServerErrorException();
    }
  }

  async createOrigin(CreateOriginDto: CreateOriginDto): Promise<Origin> {
    const { name, foods } = CreateOriginDto;

    const origin = this.create({
      name,
      foods,
    });

    await this.save(origin);
    return origin;
  }
}
