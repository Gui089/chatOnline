import { Inject, Injectable } from "@nestjs/common";
import { UsersRepository } from "../../domain/user.repository";
import { UserEntity } from "../../domain/user";


@Injectable() 
export class CreateUserUseCase {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: UsersRepository
  ){}

  async execute(data:any) {
    const user = new UserEntity({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    await this.usersRepository.create(user);

    return {
      user: user.toJSON()
    }

  }
}