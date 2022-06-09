import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from './roles.entity';
import { User } from "../users/users.entity";


@Entity('user_roles')
export class UserRoles {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  roleId: string;

  @Column()
  userId: string;

  @OneToOne(() => Role)
  @JoinColumn()
  roles: Role;

  @OneToOne(() => User)
  @JoinColumn()
  users: User;
}
