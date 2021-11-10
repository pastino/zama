import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
  OneToMany,
} from "typeorm";
import { AudioBasketMapping } from "./AudioBasketMapping";
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

  @Column({ nullable: true, default: null })
  time2: number;

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
  file1: string;

  @Column()
  file2: string;

  @Column({ default: true })
  recoFlag: boolean;

  @ManyToOne(() => User, (user) => user.makedAudios)
  creator: User;

  @OneToMany(
    () => AudioBasketMapping,
    (audioBasketMappings) => audioBasketMappings.user
  )
  inBasketUsers: User[];

  @Column({ nullable: true, default: null })
  history: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
