import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
  UploadedFile
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

import { UsersService } from "./users.service";
import { CreateUserInput } from "./create-user.input";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get("/")
  findAll() {
    return this.usersService.findAll();
  }

  @Get("/:uid")
  findOne(@Param("uid") uid) {
    return this.usersService.findOne(uid);
  }

  @Post("/")
  @UseInterceptors(
    FileInterceptor("avatar", { dest: "uploads/users" }),
    ClassSerializerInterceptor
  )
  create(@Body() input: CreateUserInput, @UploadedFile() avatar) {
    return this.usersService.create(input, avatar.path);
  }
}
