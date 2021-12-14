import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateOriginDto } from './dto/create-origin.dto';
import { UpdateOriginDto } from './dto/update-origin.dto';
import { Origin } from '../entities/origin.entity';
import { OriginsService } from './origins.service';
import { GetOriginsFilterDto } from './dto/get-origins-filter.dto';

@Controller('origins')
@UseGuards(AuthGuard())
export class OriginsController {
  private logger = new Logger('Origin Controller', { timestamp: true });
  constructor(private originService: OriginsService) {}

  @Get()
  getOrigins(@Query() filterDto: GetOriginsFilterDto): Promise<Origin[]> {
    this.logger.verbose(
      `Retrieving all origin data. Filters: ${JSON.stringify(filterDto)}`,
      true,
    );

    return this.originService.getOrigins(filterDto);
  }

  @Get('/:id')
  getOriginById(@Param('id') id: number): Promise<Origin> {
    this.logger.verbose(`Retrieving origin with id ${id}`);

    return this.originService.getOriginById(id);
  }

  @Post()
  createOrigin(@Body() createOriginDto: CreateOriginDto): Promise<Origin> {
    this.logger.verbose(`Create origin: ${JSON.stringify(createOriginDto)}`);

    return this.originService.createOrigin(createOriginDto);
  }

  @Patch('/:id/name')
  updateOriginName(
    @Param('id') id: number,
    @Body() updateOriginDto: UpdateOriginDto,
  ): Promise<Origin> {
    this.logger.verbose(`Update origin: ${JSON.stringify(updateOriginDto)}`);

    return this.originService.updateOriginName(id, updateOriginDto);
  }

  @Delete('/:id')
  deleteOrigin(@Param('id') id: number): Promise<void> {
    this.logger.verbose(`Delete origin with id ${id}`);

    return this.originService.deleteOrigin(id);
  }
}
