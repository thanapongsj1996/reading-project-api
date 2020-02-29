import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PassportModule } from "@nestjs/passport";

import { Author } from "./author.entity";
import { AuthorsService } from "./authors.service";
import { AuthorsController } from "./authors.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Author]),
    PassportModule.register({ defaultStrategy: "jwt" })
  ],
  providers: [AuthorsService],
  controllers: [AuthorsController]
})
export class AuthorsModule {}
