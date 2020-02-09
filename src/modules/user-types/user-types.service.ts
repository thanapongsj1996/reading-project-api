import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UserTypes } from "./user-type.entity";

@Injectable()
export class UserTypesService {
  constructor(
    @InjectRepository(UserTypes)
    private userTypesRepository: Repository<UserTypes>
  ) {}

  getAll() {
    return this.userTypesRepository.find({ relations: ["users"] });
  }

  create(input) {
    const userType = this.userTypesRepository.create(input);

    return this.userTypesRepository.save(userType);
  }
}
