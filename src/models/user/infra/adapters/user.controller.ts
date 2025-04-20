import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CreateUserUseCase } from "../../application/use-cases/create-user-use-case";


@Controller('/user') 
export class UserController {
  constructor(
    private readonly createUserUsecase:CreateUserUseCase
  ){}

  @Post('')
  async createUser(@Body() data:any) {
    console.log(data);
    return await this.createUserUsecase.execute(data);
  }
}