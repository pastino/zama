import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Administrator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  administratorId: string;

  @Column()
  password: string;

  @Column()
  super: boolean;

  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updateAt: Date;
}
