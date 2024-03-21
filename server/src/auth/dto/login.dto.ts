import { IsEmail, IsString } from "class-validator";

export class LoginDTO {
  @IsEmail({}, { message: "Email is invalid" })
  readonly email: string;

  @IsString({ message: "Password must be a string" })
  readonly password: string;
}
