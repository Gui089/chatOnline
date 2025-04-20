import { UserEntity, UserProps } from "./user";

export interface UsersRepository {
  create(user: UserEntity): Promise<void>;
  findByEmail(email:string): Promise<UserProps | null>;
  findById(id:string): Promise<UserProps | null>;
}