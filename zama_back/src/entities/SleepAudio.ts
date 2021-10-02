import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class SleepAudio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  time: number;

  @Column()
  category: string;

  @Column()
  thumbnail: string;

  @Column()
  file: string;

  @Column("boolean", { default: true })
  recoFlag: boolean = true;

  @OneToOne((type) => User)
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
