import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";

import { Book } from "src/modules/books/book.entity";

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uid: string;

  @Column()
  name: string;

  @Column()
  info: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    type => Book,
    book => book.author
  )
  books: Book[];
}
