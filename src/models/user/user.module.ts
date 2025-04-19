import { Module } from "@nestjs/common";
import { UserService } from "./application/user.service";

@Module(
  { providers: [UserService] }
)

export class UserModule {};