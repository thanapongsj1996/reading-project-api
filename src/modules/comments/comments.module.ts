import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PassportModule } from "@nestjs/passport";

import { Comment } from "./comment.entity";
import { CommentsController } from "./comments.controller";
import { CommentsService } from "./comments.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment]),
    PassportModule.register({ defaultStrategy: "jwt" })
  ],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
