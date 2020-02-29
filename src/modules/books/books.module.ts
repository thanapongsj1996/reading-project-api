import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PassportModule } from "@nestjs/passport";

import { Book } from "./book.entity";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    PassportModule.register({ defaultStrategy: "jwt" })
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
