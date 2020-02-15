import { Controller, Get, Post, Body, Param, Query } from "@nestjs/common";

import { CommentsService } from "./comments.service";
import { CreateCommentInput } from "./create-comment.input";
import { CommentQuery } from "./comment.query";

@Controller("comments")
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get("/")
  findAll(@Query() query: CommentQuery) {
    return this.commentsService.findAll(query);
  }

  @Post("/")
  create(@Body() input: CreateCommentInput) {
    return this.commentsService.create(input);
  }
}
