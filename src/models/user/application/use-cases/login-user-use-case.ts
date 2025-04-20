import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersRepository } from "../../domain/user.repository";
import bcrypt from 'bcryptjs'
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class LoginUserUseCase {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository:UsersRepository,
    private readonly jwtservice:JwtService
  ) {}

  async login(email:string, password:string):Promise<{access_token: string}> {

    const user = await this.usersRepository.findByEmail(email);

    if(!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    const payload = {sub: user.id};

    if(!passwordMatches) {
      throw new UnauthorizedException("Invalid credentials");
    }
    return {
      access_token: await this.jwtservice.signAsync(payload),
    };
  }
}