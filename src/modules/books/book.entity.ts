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

import { Article } from "src/modules/articles/article.entity";
import { Author } from "src/modules/authors/author.entity";
import { Category } from "src/modules/categories/category.entity";

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

  @ManyToOne(
    type => Category,
    category => category.books
  )
  category: Category;

  @ManyToOne(
    type => Author,
    author => author.books
  )
  author: Author;
}
