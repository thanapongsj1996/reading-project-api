import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserTypes } from "./user-type.entity";
import { UserTypesService } from "./user-types.service";
import { UserTypesController } from "./user-types.controller";

@Module({
  imports: [TypeOrmModule.forFeature([UserTypes])],
  providers: [UserTypesService],
  controllers: [UserTypesController]
})
export class UserTypesModule {}
