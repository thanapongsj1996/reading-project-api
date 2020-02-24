import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Emotion } from "./emotion.entity";

@Injectable()
export class EmotionsService {
  constructor(
    @InjectRepository(Emotion)
    private emotionsRepository: Repository<Emotion>
  ) {}

  findAll() {
    return this.emotionsRepository.find();
  }
}
