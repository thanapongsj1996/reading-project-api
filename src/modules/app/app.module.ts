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
import { AuthorsModule } from "src/modules/authors/authors.module";
import { CategoriesModule } from "src/modules/categories/categories.module";
import { AuthModule } from "src/modules/auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    UserTypesModule,
    ArticlesModule,
    CommentsModule,
    LikesModule,
    EmotionsModule,
    BooksModule,
    AuthorsModule,
    CategoriesModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
