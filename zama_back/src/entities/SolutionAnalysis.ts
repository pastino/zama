import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export type Category = "SignUp";

@Entity()
export class SolutionAnalysis {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  purpose: string;

  @Column({
    type: "enum",
    enum: ["SignUp"],
  })
  category: Category | null | undefined;

  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updateAt: Date;
}
