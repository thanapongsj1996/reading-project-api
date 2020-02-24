import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Article } from "./article.entity";
import { Repository } from "typeorm";

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

  create(input) {
    const article = this.articlesRepository.create(input);

    return this.articlesRepository.save(article);
  }
}
