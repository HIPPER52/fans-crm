import { IsEmail, IsString } from "class-validator";

export class CreateUserDTO {
  @IsEmail({}, { message: "Email is invalid" })
  readonly email: string;

  @IsString({ message: "Password must be a string" })
  readonly password: string;

  @IsString({ message: "Phone number must be a string" })
  readonly phone: string;

  @IsString({ message: "Name must be a string" })
  readonly name: string;
}
