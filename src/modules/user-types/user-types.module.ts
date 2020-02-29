import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PassportModule } from "@nestjs/passport";

import { UserType } from "./user-type.entity";
import { UserTypesService } from "./user-types.service";
import { UserTypesController } from "./user-types.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserType]),
    PassportModule.register({ defaultStrategy: "jwt" })
  ],
  providers: [UserTypesService],
  controllers: [UserTypesController]
})
export class UserTypesModule {}
