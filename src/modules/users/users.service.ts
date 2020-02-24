import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";

import { User } from "./user.entity";
import { CreateUserInput } from "./create-user.input";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  findAll() {
    return this.userRepository.find({ relations: ["type"] });
  }

  findOne(input: string) {
    return this.userRepository.findOne({
      where: { uid: input },
      relations: ["type"]
    });
  }

  async create(input: CreateUserInput, avatarPath) {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(input.password, salt);
    const user = this.userRepository.merge(new User(), input, {
      password,
      profileImage: avatarPath
    });

    return this.userRepository.save(user);
  }
}
