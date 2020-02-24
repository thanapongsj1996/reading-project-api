import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";

import { Article } from "src/modules/articles/article.entity";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uid: string;

  @Column()
  authorId: number;

  @Column()
  categoryId: number;

  @Column()
  name: string;

  @Column()
  introduction: string;

  @Column({ nullable: true })
  picture: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    type => Article,
    article => article.book
  )
  articles: Article[];
}
