import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Req,
  UseGuards
} from "@nestjs/common";

import { ArticlesService } from "./articles.service";
import { CreateArticleInput } from "./create-article.input";
import { UpdateArticleInput } from "./update-article.input";
import { AuthGuard } from "@nestjs/passport";

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

  @UseGuards(AuthGuard())
  @Patch("/:articleId")
  update(
    @Param("articleId") articleId: string,
    @Body() input: UpdateArticleInput,
    @Req() req
  ) {
    return this.articlesService.update(articleId, input, req.user.id);
  }
}
