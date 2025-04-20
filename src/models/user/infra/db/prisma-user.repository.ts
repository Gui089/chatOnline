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

  async findByEmail(email: string): Promise<UserProps | null> {
    return await this.prisma.user.findUnique({
      where: {
        email:email
      }
    });
  }
  async findById(id: string): Promise<UserProps | null> {
    return await this.prisma.user.findUnique({
      where: {
        id
      }
    });
  }
}