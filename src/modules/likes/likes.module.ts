import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PassportModule } from "@nestjs/passport";

import { Like } from "./like.entity";
import { LikesService } from "./likes.service";
import { LikesController } from "./likes.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Like]),
    PassportModule.register({ defaultStrategy: "jwt" })
  ],
  controllers: [LikesController],
  providers: [LikesService]
})
export class LikesModule {}
