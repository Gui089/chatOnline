import { UserEntity } from "./user";

export interface UsersRepository {
  create(user: UserEntity): Promise<void>;
  findByEmail(email:string): Promise<UserEntity | null>;
  findById(id:string): Promise<UserEntity | null>;
}