import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from "typeorm";
import { SleepAudio } from "./SleepAudio";
import { Division, DivisionEnum } from "./Types";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: DivisionEnum,
  })
  division: Division | null | undefined;

  @Column({ nullable: true })
  category: string;

  @ManyToMany(
    () => SleepAudio,
    (sleepAudio: SleepAudio) => sleepAudio.categories
  )
  sleepAudios: SleepAudio[];

  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updateAt: Date;
}
