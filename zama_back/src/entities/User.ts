import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { SleepAudio } from "./SleepAudio";

export type LoginMethod =
  | "EMAIL"
  | "KAKAO"
  | "GOOGLE"
  | "NAVER"
  | "APPLE"
  | "PHONE";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  phoneNum: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  birth: number;

  @Column({ nullable: true })
  kakaoId: string;

  @Column({ nullable: true })
  googleId: string;

  @Column({ nullable: true })
  naverId: string;

  @Column({ nullable: true })
  appleId: string;

  @Column({ nullable: true })
  serviceTermAgreement: boolean;

  @Column({ nullable: true })
  privacyPolicyAgreement: boolean;

  @Column({ nullable: true })
  marketingAgreement: boolean;

  @Column({ nullable: true })
  avatar: string;

  @OneToOne((type) => SleepAudio, (sleepAudio) => sleepAudio.user)
  sleepAudio: SleepAudio;

  @Column({
    type: "enum",
    enum: ["EMAIL", "KAKAO", "GOOGLE", "NAVER", "APPLE", "PHONE"],
  })
  loginMethod: LoginMethod | null | undefined;

  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updateAt: Date;
}
