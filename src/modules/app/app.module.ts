import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UsersModule } from "src/modules/users/users.module";
import { UserTypesModule } from "src/modules/user-types/user-types.module";

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, UserTypesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
