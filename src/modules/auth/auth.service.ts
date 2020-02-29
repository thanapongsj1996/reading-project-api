import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

import { UsersService } from "src/modules/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findBy({ username });

    if (!user) return null;

    const result = await bcrypt.compare(password, user.password);

    return result && user;
  }

  async login(user: any) {
    const payload = { userUid: user.uid, userType: user.typeId };

    return { accessToken: this.jwtService.sign(payload) };
  }
}
