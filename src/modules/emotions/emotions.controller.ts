import { Controller, Get } from "@nestjs/common";

import { EmotionsService } from "./emotions.service";

@Controller("emotions")
export class EmotionsController {
  constructor(private emotionsService: EmotionsService) {}

  @Get("/")
  findAll() {
    return this.emotionsService.findAll();
  }
}
