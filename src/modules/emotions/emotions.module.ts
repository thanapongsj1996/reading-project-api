import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PassportModule } from "@nestjs/passport";

import { Emotion } from "./emotion.entity";
import { EmotionsService } from "./emotions.service";
import { EmotionsController } from "./emotions.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Emotion]),
    PassportModule.register({ defaultStrategy: "jwt" })
  ],
  providers: [EmotionsService],
  controllers: [EmotionsController]
})
export class EmotionsModule {}
