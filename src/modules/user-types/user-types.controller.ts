import { Controller, Get, Post, Body } from "@nestjs/common";

import { UserTypesService } from "./user-types.service";
import { CreateUserTypeInput } from "./create-usertype.input";

@Controller("user-types")
export class UserTypesController {
  constructor(private userTypesService: UserTypesService) {}

  @Get("/")
  getAll() {
    return this.userTypesService.getAll();
  }

  @Post("/")
  create(@Body() input: CreateUserTypeInput) {
    return this.userTypesService.create(input);
  }
}
