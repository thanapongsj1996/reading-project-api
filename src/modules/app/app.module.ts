import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UsersModule } from "src/modules/users/users.module";
import { UserTypesModule } from "src/modules/user-types/user-types.module";
import { ArticlesModule } from "src/modules/articles/articles.module";
import { CommentsModule } from "src/modules/comments/comments.module";
import { LikesModule } from "src/modules/likes/likes.module";
import { EmotionsModule } from "src/modules/emotions/emotions.module";
import { BooksModule } from "src/modules/books/books.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    UserTypesModule,
    ArticlesModule,
    CommentsModule,
    LikesModule,
    EmotionsModule,
    BooksModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
