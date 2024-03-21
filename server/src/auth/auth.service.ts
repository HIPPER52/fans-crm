import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import * as bcrypt from "bcryptjs";
import { CreateUserDTO } from "src/users/dto/create-user.dto";
import { User } from "src/users/users.model";
import { JwtService } from "@nestjs/jwt";
import { LoginDTO } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  private async generateToken(user: User) {
    const payload = { id: user.id, name: user.name, email: user.email };
    return { token: this.jwtService.sign(payload) };
  }

  private async validateUser(dto: LoginDTO) {
    const user = await this.userService.getUserByEmail(dto.email);
    const isPasswordEquals = await bcrypt.compare(dto.password, user.password);

    if (user && isPasswordEquals) return user;

    throw new UnauthorizedException({ message: "Incorrect email or password" });
  }

  async login(dto: LoginDTO) {
    const user = await this.validateUser(dto);
    return this.generateToken(user);
  }

  async register(dto: CreateUserDTO) {
    const candidate = await this.userService.getUserByEmail(dto.email);

    if (candidate) {
      throw new HttpException(
        "User with the same email already exists",
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.userService.createUser({
      ...dto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }
}
