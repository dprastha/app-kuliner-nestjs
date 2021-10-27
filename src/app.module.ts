import { Module } from '@nestjs/common';
import { FoodsModule } from './foods/foods.module';
import { OriginsModule } from './origins/origins.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    FoodsModule,
    OriginsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'app-kuliner',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
