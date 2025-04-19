import { UserEntity } from "../../domain/user";
import { UsersRepository } from "../../domain/user.repository";


export class InMemoryUsersRepository implements UsersRepository{
  private users: UserEntity[] = [];

  async create(user: UserEntity): Promise<void> {
    this.users.push(user);
  }
  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.users.find((user) => email === user.getEmail) ?? null;
  }
  async findById(id: string): Promise<UserEntity | null> {
    return this.users.find((u) => u.getId === id) ?? null;
  }
  
}