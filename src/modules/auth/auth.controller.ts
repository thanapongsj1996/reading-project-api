import { Controller, Post, Request, UseGuards, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersService } from "../users/users.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Post("/login")
  @UseGuards(AuthGuard("local"))
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard())
  @Get("/profile")
  getProfile(@Request() req) {
    return this.usersService.findOne(req.user.uid);
  }
}
