import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Book } from "./book.entity";

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>
  ) {}

  findAll() {
    return this.booksRepository.find({ relations: ["category", "author"] });
  }
}
