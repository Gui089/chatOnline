import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CreateUserUseCase } from "../../application/use-cases/create-user-use-case";
import { CreateUserDto } from "../../application/validators/user.dto";
import { LoginUserUseCase } from "../../application/use-cases/login-user-use-case";


@Controller('/user') 
export class UserController {
  constructor(
    private readonly createUserUsecase:CreateUserUseCase,
    private readonly loginUser:LoginUserUseCase
  ){}

  @Post('')
  async createUser(@Body() data:CreateUserDto) {
    return await this.createUserUsecase.execute(data);
  }

  @Post('login')
  async login(@Body() body:any) {
    const {email, password} = body;
    return await this.loginUser.login(email, password);
  }
}