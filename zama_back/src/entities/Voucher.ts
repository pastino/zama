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
export class Voucher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  voucherNumber: string;

  @ManyToOne(() => User, (user) => user.subscriptions)
  user: User;

  @Column({
    type: "enum",
    enum: SubscriptionEnum,
  })
  name: SubscriptionType | null | undefined;

  @Column({ nullable: true })
  expiredDate: Date;

  @Column({ default: true })
  available: boolean;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
