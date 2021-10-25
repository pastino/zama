import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
  AfterLoad,
} from "typeorm";
import { Category } from "./Category";
import { Division, DivisionEnum } from "./Types";
import { User } from "./User";

@Entity()
export class SleepAudio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  time: number;

  @Column({
    type: "enum",
    enum: DivisionEnum,
  })
  division: Division | null | undefined;

  @ManyToMany(() => Category, (category) => category.sleepAudios)
  @JoinTable()
  categories: Category[];

  @Column()
  thumbnail: string;

  @Column()
  file: string;

  @Column({ default: true })
  recoFlag: boolean;

  @ManyToOne(() => User, (user) => user.makedAudios)
  creator: User;

  @ManyToMany(() => User, (user) => user.inBasketAudios)
  @JoinTable()
  inBasketUsers: User[];

  @Column({ nullable: true, default: null })
  history: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
