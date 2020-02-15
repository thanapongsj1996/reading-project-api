import { Controller, Get, Post, Body } from "@nestjs/common";

import { LikesService } from "./likes.service";
import { CreateLikeInput } from "./create-like.input";

@Controller("likes")
export class LikesController {
  constructor(private likesService: LikesService) {}

  @Get("/")
  findAll() {
    return this.likesService.findAll();
  }

  @Post("/")
  create(@Body() input: CreateLikeInput) {
    return this.likesService.create(input);
  }
}
