import {
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from "typeorm";

import { User } from "src/modules/users/user.entity";
import { Article } from "src/modules/articles/article.entity";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uid: string;

  @Column()
  userId: number;

  @Column()
  articleId: number;

  @Column()
  body: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(
    type => User,
    user => user.comments
  )
  user: User;

  @ManyToOne(
    type => Article,
    article => article.comments
  )
  article: Article;
}
