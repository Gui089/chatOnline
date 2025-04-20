import * as bcrypt from 'bcryptjs';

export interface UserProps {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export class UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor(props: UserProps) {
    if (!this.validateEmail(props.email)) {
      throw new Error('Invalid email');
    }

    this.id = props.id ?? crypto.randomUUID();
    this.name = props.name;
    this.email = props.email;
    this.password = props.password; 
    this.password = this.hashPassword(this.password);
  }

  private hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  private validateEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  public isPasswordCorrect(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }
}
