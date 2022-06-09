import { Column, Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/users.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  value: string;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];
}
