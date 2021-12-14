import { EntityRepository, Repository } from 'typeorm';
import { CreateOriginDto } from './dto/create-origin.dto';
import { Origin } from '../entities/origin.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';

@EntityRepository(Origin)
export class OriginsRepository extends Repository<Origin> {
  private logger = new Logger('Origin Repository', { timestamp: true });
  async getOrigins(): Promise<Origin[]> {
    try {
      const origins = await this.find({
        relations: ['foods'],
      });

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
