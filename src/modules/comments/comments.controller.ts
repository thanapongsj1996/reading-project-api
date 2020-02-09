import { Controller, Get, Post, Body } from "@nestjs/common";

import { CommentsService } from "./comments.service";
import { CreateCommentInput } from "./create-comment.input";

@Controller("comments")
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get("/")
  findAll() {
    return this.commentsService.findAll();
  }

  @Post("/")
  create(@Body() input) {
    return this.commentsService.create(input);
  }
}
