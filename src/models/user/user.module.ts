import { Module } from "@nestjs/common";
import { PrismaModule } from "src/shared/prisma/prisma.module";
import { CreateUserUseCase } from "./application/use-cases/create-user-use-case";
import { PrismaUsersRepository } from "./infra/db/prisma-user.repository";
import { UserController } from "./infra/adapters/user.controller";
import { LoginUserUseCase } from "./application/use-cases/login-user-use-case";
import { JwtModule, JwtService } from "@nestjs/jwt";

@Module(
  {
    imports: [PrismaModule, JwtModule.register({
      global:true,
      secret:process.env.JWT_SCRECTS
    })],
    controllers:[UserController],
    providers: [CreateUserUseCase,LoginUserUseCase, {
      provide:'UsersRepository',
      useClass: PrismaUsersRepository
    }]
  }
)

export class UserModule { };