import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Food } from './food.entity';

@Entity()
export class Origin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ nullable: true })
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;

  @OneToMany(() => Food, (food) => food.origin, { eager: true })
  foods: Food[];
}
