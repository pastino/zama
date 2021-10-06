import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { Category } from "./Category";
import { Division, DivisionEnum } from "./Types";
import { User } from "./User";

// export const DivisionEnum = ["Song", "Story", "ASMR"];
// export type category =

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

  @Column("boolean", { default: true })
  recoFlag: boolean = true;

  @ManyToOne((type) => User, (user) => user.sleepAudios)
  creator: User;

  @ManyToMany((type) => User, (users) => users.id, {
    cascade: true,
  })
  users: User[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
