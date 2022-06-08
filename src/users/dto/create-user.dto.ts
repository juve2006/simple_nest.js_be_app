import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';
import { Exclude } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  readonly username: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @Exclude()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  readonly password: string;
}
