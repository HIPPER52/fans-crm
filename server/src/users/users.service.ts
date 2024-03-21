import { Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDTO } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDTO) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findByPk(id, {});
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }
}
