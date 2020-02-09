import { Controller, Get, Post, Body } from "@nestjs/common";

import { UserTypesService } from "./user-types.service";
import { CreateUserTypesInput } from "./create-usertypes.input";

@Controller("user-types")
export class UserTypesController {
  constructor(private userTypesService: UserTypesService) {}

  @Get("/")
  getAll() {
    return this.userTypesService.getAll();
  }

  @Post("/")
  create(@Body() input: CreateUserTypesInput) {
    return this.userTypesService.create(input);
  }
}
