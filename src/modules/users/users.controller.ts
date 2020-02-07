import { Controller, Get, Post, Body } from "@nestjs/common";

import { UsersService } from "./users.service";
import { CreateUserInput } from "./create-user.input";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get("/")
  findAll() {
    return this.usersService.findAll();
  }

  @Post("/")
  create(@Body() input: CreateUserInput) {
    return this.usersService.create(input);
  }
}
