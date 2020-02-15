import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Like } from "./like.entity";
import { CreateLikeInput } from "./create-like.input";

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like)
    private likeRepository: Repository<Like>
  ) {}

  findAll() {
    return this.likeRepository.find({ relations: ["user"] });
  }

  create(input: CreateLikeInput) {
    const like = this.likeRepository.create(input);

    return this.likeRepository.save(like);
  }
}
