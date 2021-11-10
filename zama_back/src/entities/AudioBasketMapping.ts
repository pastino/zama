import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { SleepAudio } from "./SleepAudio";
import { User } from "./User";

@Entity()
export class AudioBasketMapping {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SleepAudio, (sleepAudio) => sleepAudio.inBasketUsers)
  audio: SleepAudio;

  @ManyToOne(() => User, (user) => user.inBasketAudios)
  user: User;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
