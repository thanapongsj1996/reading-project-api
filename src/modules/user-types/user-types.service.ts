import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UserType } from "./user-type.entity";

@Injectable()
export class UserTypesService {
  constructor(
    @InjectRepository(UserType)
    private userTypesRepository: Repository<UserType>
  ) {}

  getAll() {
    return this.userTypesRepository.find();
  }

  create(input) {
    const userType = this.userTypesRepository.create(input);

    return this.userTypesRepository.save(userType);
  }
}
