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

  @Column({ default: false })
  free: boolean;

  @Column({ nullable: true, default: null })
  voiceGender: string;

  @ManyToOne(() => User, (user) => user.makedAudios)
  creator: User;

  @OneToMany(
    () => AudioBasketMapping,
    (audioBasketMappings) => audioBasketMappings.user
  )
  inBasketUsers: User[];

  @Column({ nullable: true, default: null })
  history: string;

  @Column({ nullable: true, default: null })
  order: number;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
