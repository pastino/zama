import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { SubscriptionType, SubscriptionEnum } from "./Types";
import { User } from "./User";

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.subscriptions)
  user: User;

  @Column({
    type: "enum",
    enum: SubscriptionEnum,
  })
  name: SubscriptionType | null | undefined;

  @Column({ nullable: true })
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @Column({ default: true })
  extraInfo: string;

  @Column({ default: true })
  available: boolean;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
