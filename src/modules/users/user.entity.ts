import {
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { Exclude, Expose } from "class-transformer";

import { UserType } from "src/modules/user-types/user-type.entity";
import { Comment } from "../comments/comment.entity";
import { Article } from "../articles/article.entity";
import { Like } from "../likes/like.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uid: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  username: string;

  @Expose()
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @Column()
  @Exclude()
  password: string;

  @Column()
  typeId: number;

  @Column()
  info: string;

  @Column({ nullable: true })
  profileImage: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(
    type => UserType,
    userType => userType.users
  )
  type: UserType;

  @OneToMany(
    type => Article,
    article => article.user
  )
  articles: Article[];

  @OneToMany(
    type => Comment,
    comment => comment.user
  )
  comments: Comment[];

  @OneToMany(
    type => Like,
    like => like.user
  )
  likes: Like;
}
