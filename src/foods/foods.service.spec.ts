import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { Origin } from '../entities/origin.entity';
import { FoodsRepository } from './foods.repository';
import { FoodsService } from './foods.service';

const mockFoodsRepository = () => ({
  getFoods: jest.fn(),
  findOne: jest.fn(),
});

describe('FoodsService', () => {
  let foodsService: FoodsService;
  let foodsRepository;

  beforeEach(async () => {
    // initialize a  NestJS module with foodsService and foodsRepsitory
    const module = await Test.createTestingModule({
      providers: [
        FoodsService,
        { provide: FoodsRepository, useFactory: mockFoodsRepository },
      ],
    }).compile();

    foodsService = module.get(FoodsService);
    foodsRepository = module.get(FoodsRepository);
  });

  describe('getFoods', () => {
    it('calls FoodsRepository.getFoods and return the results', async () => {
      foodsRepository.getFoods.mockResolvedValue('someValue');
      const result = await foodsService.getFoods(null);
      expect(result).toEqual('someValue');
    });
  });

  describe('getFoodById', () => {
    it('calls FoodsRepository.findOne and return the result', async () => {
      const mockFood = {
        id: 1,
        name: 'Test food',
        description: 'Test desc',
        origin: Origin,
      };

      foodsRepository.findOne.mockResolvedValue(mockFood);
      const result = await foodsService.getFoodById(1);
      expect(result).toEqual(mockFood);
    });

    it('calls FoodsRepository.findOne and return an error', async () => {
      foodsRepository.findOne.mockResolvedValue(null);
      expect(foodsService.getFoodById(1)).rejects.toThrow(NotFoundException);
    });
  });
});
