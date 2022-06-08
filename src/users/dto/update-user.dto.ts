import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  readonly username: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  readonly password: string;
}
