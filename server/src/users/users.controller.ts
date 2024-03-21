import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UsePipes,
} from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ValidationPipe } from "src/pipes/validation.pipe";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() userDTO: CreateUserDTO) {
    return this.usersService.createUser(userDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.usersService.getUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  getById(@Param("id", ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }
}
