import {
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from "typeorm";
import { Exclude, Expose } from "class-transformer";

import { UserTypes } from "src/modules/user-types/user-type.entity";

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
    type => UserTypes,
    userType => userType.users
  )
  type: UserTypes;
}
