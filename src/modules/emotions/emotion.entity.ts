import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

import { Like } from "src/modules/likes/like.entity";

@Entity()
export class Emotion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    type => Like,
    like => like.emotion
  )
  likes: Like[];
}
