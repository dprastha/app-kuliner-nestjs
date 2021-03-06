import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOriginDto } from './dto/create-origin.dto';
import { UpdateOriginDto } from './dto/update-origin.dto';
import { Origin } from '../entities/origin.entity';
import { OriginsRepository } from './origins.repository';
import { GetOriginsFilterDto } from './dto/get-origins-filter.dto';

@Injectable()
export class OriginsService {
  constructor(
    @InjectRepository(OriginsRepository)
    private originsRepository: OriginsRepository,
  ) {}

  getOrigins(filterDto: GetOriginsFilterDto): Promise<Origin[]> {
    return this.originsRepository.getOrigins(filterDto);
  }

  createOrigin(createOriginDto: CreateOriginDto): Promise<Origin> {
    return this.originsRepository.createOrigin(createOriginDto);
  }

  async getOriginById(id: number): Promise<Origin> {
    const found = this.originsRepository.findOne(id, {
      relations: ['foods'],
    });

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  async updateOriginName(
    id: number,
    updateOriginDto: UpdateOriginDto,
  ): Promise<Origin> {
    const { name } = updateOriginDto;
    const origin = await this.getOriginById(id);

    origin.name = name;

    await this.originsRepository.save(origin);
    return origin;
  }

  async deleteOrigin(id: number): Promise<void> {
    const result = await this.originsRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException();
    }
  }
}
