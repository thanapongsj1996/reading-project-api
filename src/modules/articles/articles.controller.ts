import { Controller, Get, Post, Body, Param } from "@nestjs/common";

import { ArticlesService } from "./articles.service";
import { CreateArticleInput } from "./create-article.input";

@Controller("articles")
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get("/")
  findAll() {
    return this.articlesService.findAll();
  }

  @Get("/:articleUid")
  findOne(@Param("articleUid") articleUid: string) {
    return this.articlesService.findOne(articleUid);
  }

  @Post("/")
  create(@Body() input: CreateArticleInput) {
    return this.articlesService.create(input);
  }
}
