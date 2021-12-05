import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Notice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  contents: string;

  @Column({ default: true })
  isVisible: Boolean;

  @Column({ default: false })
  isHomeNotice: Boolean;

  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updateAt: Date;
}
