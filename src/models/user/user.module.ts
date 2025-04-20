import { Module } from "@nestjs/common";
import { PrismaModule } from "src/shared/prisma/prisma.module";
import { CreateUserUseCase } from "./application/use-cases/create-user-use-case";
import { PrismaUsersRepository } from "./infra/db/prisma-user.repository";
import { UserController } from "./infra/adapters/user.controller";

@Module(
  {
    imports: [PrismaModule],
    controllers:[UserController],
    providers: [CreateUserUseCase, {
      provide:'UsersRepository',
      useClass: PrismaUsersRepository
    }]
  }
)

export class UserModule { };