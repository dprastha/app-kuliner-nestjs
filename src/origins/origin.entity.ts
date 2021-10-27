import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Food } from 'src/foods/food.entity';

@Entity()
export class Origin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @ManyToOne(() => Food, (food) => food.origin)
  // foods: Food[];
}
