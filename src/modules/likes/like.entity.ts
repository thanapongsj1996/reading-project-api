import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from "typeorm";

import { User } from "src/modules/users/user.entity";
import { Article } from "src/modules/articles/article.entity";

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  articleId: number;

  @Column()
  emotionId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(
    type => User,
    user => user.likes
  )
  user: User;

  @ManyToOne(
    type => Article,
    article => article.likes
  )
  article: Article;
}
