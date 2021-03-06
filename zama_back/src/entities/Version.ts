import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Version {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  appVersionAnd: string;

  @Column()
  appVersionIOS: string;

  @Column()
  appMinimumVersion: string;

  @Column()
  appLatestVersion: string;

  @Column({ nullable: true })
  updateContents: string;

  @Column()
  isTest: boolean;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
