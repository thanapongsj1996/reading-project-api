import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserType } from "./user-type.entity";
import { UserTypesService } from "./user-types.service";
import { UserTypesController } from "./user-types.controller";

@Module({
  imports: [TypeOrmModule.forFeature([UserType])],
  providers: [UserTypesService],
  controllers: [UserTypesController]
})
export class UserTypesModule {}
