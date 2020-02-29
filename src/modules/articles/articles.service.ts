import { Injectable, ForbiddenException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Article } from "./article.entity";
import { CreateArticleInput } from "./create-article.input";
import { UpdateArticleInput } from "./update-article.input";

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>
  ) {}

  findAll() {
    return this.articlesRepository.find({
      relations: ["user", "likes", "book"]
    });
  }

  findOne(articleUid: string) {
    return this.articlesRepository.findOne({
      where: { uid: articleUid },
      relations: ["user"]
    });
  }

  create(input: CreateArticleInput) {
    const article = this.articlesRepository.create(input);

    return this.articlesRepository.save(article);
  }

  async update(articleId, input: UpdateArticleInput, userId) {
    let article = await this.articlesRepository.findOne(articleId);

    if (userId !== article.userId) {
      throw new ForbiddenException();
    }

    article = this.articlesRepository.merge(article, input);

    return this.articlesRepository.save(article);
  }
}
