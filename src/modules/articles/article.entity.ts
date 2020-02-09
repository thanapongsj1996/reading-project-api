import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne
} from "typeorm";

import { Comment } from "src/modules/comments/comment.entity";
import { User } from "../users/user.entity";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uid: string;

  @Column()
  userId: number;

  @Column()
  bookId: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  body: string;

  @Column({ nullable: true })
  bookImage: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(
    type => User,
    user => user.articles
  )
  user: User;

  @OneToMany(
    type => Comment,
    comment => comment.article
  )
  comments: Comment[];
}
