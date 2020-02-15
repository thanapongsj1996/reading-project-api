import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Comment } from "./comment.entity";
import { CreateCommentInput } from "./create-comment.input";
import { CommentQuery } from "./comment.query";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>
  ) {}

  findAll(input: CommentQuery) {
    return this.commentRepository.find({
      relations: ["user"],
      where: { articleId: input.articleId }
    });
  }

  create(input: CreateCommentInput) {
    const comment = this.commentRepository.create(input);

    return this.commentRepository.save(comment);
  }
}
