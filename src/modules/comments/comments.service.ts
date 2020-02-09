import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Comment } from "./comment.entity";
import { CreateCommentInput } from "./create-comment.input";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>
  ) {}

  findAll() {
    return this.commentRepository.find({ relations: ["user", "article"] });
  }

  create(input: CreateCommentInput) {
    const comment = this.commentRepository.create(input);

    return this.commentRepository.save(comment);
  }
}
