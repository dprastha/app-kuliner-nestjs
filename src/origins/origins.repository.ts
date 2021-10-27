import { Entity, EntityRepository } from 'typeorm';
import { Origin } from './origin.entity';

@EntityRepository(Origin)
export class OriginsRepository {}
