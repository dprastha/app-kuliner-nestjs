import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateOriginDto } from './dto/create-origin.dto';
import { UpdateOriginDto } from './dto/update-origin.dto';
import { Origin } from '../entities/origin.entity';
import { OriginsService } from './origins.service';

@Controller('origins')
@UseGuards(AuthGuard())
export class OriginsController {
  constructor(private originService: OriginsService) {}

  @Get()
  getOrigins(): Promise<Origin[]> {
    return this.originService.getOrigins();
  }

  @Get('/:id')
  getOriginById(@Param('id') id: number): Promise<Origin> {
    return this.originService.getOriginById(id);
  }

  @Post()
  createOrigin(@Body() createOriginDto: CreateOriginDto): Promise<Origin> {
    return this.originService.createOrigin(createOriginDto);
  }

  @Patch('/:id/name')
  updateOriginName(
    @Param('id') id: number,
    @Body() updateOriginDto: UpdateOriginDto,
  ): Promise<Origin> {
    return this.originService.updateOriginName(id, updateOriginDto);
  }

  @Delete('/:id')
  deleteOrigin(@Param('id') id: number): Promise<void> {
    return this.originService.deleteOrigin(id);
  }
}
