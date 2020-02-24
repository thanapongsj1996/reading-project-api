import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Author } from "./author.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>
  ) {}

  findAll() {
    return this.authorsRepository.find();
  }
}
