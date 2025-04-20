import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersRepository } from "../../domain/user.repository";
import { UserEntity } from "../../domain/user";
import { CreateUserDto } from "../validators/user.dto";


@Injectable() 
export class CreateUserUseCase {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: UsersRepository
  ){}

  async execute(data:CreateUserDto) {
    const user = new UserEntity({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    const userAlreadyExists = await this.usersRepository.findByEmail(user.email);

    if(userAlreadyExists) {
      throw new BadRequestException("Usuário já existe com esse e-mail");
    }

    await this.usersRepository.create(user);

    return {
      user: user.toJSON()
    }
  }
}