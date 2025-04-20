import { PrismaService } from "src/shared/prisma/prisma.service";
import { UserEntity, UserProps } from "../../domain/user";
import { UsersRepository } from "../../domain/user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: UserEntity): Promise<void> {
     await this.prisma.user.create({
      data:{
        id: crypto.randomUUID(),
        name:user.name,
        email: user.email,
        password:user.password
      }
     });
  }

  findByEmail(email: string): Promise<UserEntity | null> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<UserEntity | null> {
    throw new Error("Method not implemented.");
  }
}