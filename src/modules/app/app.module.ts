import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UsersModule } from "src/modules/users/users.module";
import { UserTypesModule } from "src/modules/user-types/user-types.module";
import { ArticlesModule } from "src/modules/articles/articles.module";
import { CommentsModule } from "src/modules/comments/comments.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    UserTypesModule,
    ArticlesModule,
    CommentsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
