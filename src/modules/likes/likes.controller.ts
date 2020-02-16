import { Controller, Get, Post, Body, Query } from "@nestjs/common";

import { LikesService } from "./likes.service";
import { CreateLikeInput } from "./create-like.input";
import { LikeQuery } from "./like.query";

@Controller("likes")
export class LikesController {
  constructor(private likesService: LikesService) {}

  @Get("/")
  findAll(@Query() query: LikeQuery) {
    return this.likesService.findAll(query);
  }

  @Post("/")
  create(@Body() input: CreateLikeInput) {
    return this.likesService.create(input);
  }
}
