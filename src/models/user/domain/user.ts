

export interface UserProps {
  user_id: string;
  name: string;
  email: string;
  password: string;
}

export class UserEntity {
  private userId: string;
  private name: string;
  private email: string;
  private password: string;

  constructor(props: UserProps) {
    this.userId = props.user_id;
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
  }

  get getEmail() {
    return this.email;
  }

  get getId() {
    return this.userId;
  }

  get getName() {
    return this.name;
  }

  toJSON() {
    return {
      id: this.userId,
      name: this.name,
      email: this.email,
    };
  }

}
