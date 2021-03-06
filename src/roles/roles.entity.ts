import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from '../users/users.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: Role;

  @Column()
  role: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
