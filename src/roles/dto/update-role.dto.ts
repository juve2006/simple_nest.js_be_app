import { IsNotEmpty } from 'class-validator';

export class UpdateRoleDto {
  @IsNotEmpty()
  readonly role: string;
}
