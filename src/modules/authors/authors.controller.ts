import { Controller, Get } from "@nestjs/common";

import { AuthorsService } from "./authors.service";

@Controller("authors")
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {}

  @Get("/")
  findAll() {
    return this.authorsService.findAll();
  }
}
