import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { CreateUserDTO } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { ValidationPipe } from "src/pipes/validation.pipe";
import { LoginDTO } from "./dto/login.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post("/login")
  login(@Body() userDTO: LoginDTO) {
    return this.authService.login(userDTO);
  }

  @UsePipes(ValidationPipe)
  @Post("/register")
  register(@Body() userDTO: CreateUserDTO) {
    return this.authService.register(userDTO);
  }
}
