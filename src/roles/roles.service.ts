import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './roles.entity';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private rolesRepository: Repository<Role>,
  ) {}

  async createRole(dto: CreateRoleDto): Promise<Role> {
    const role = this.rolesRepository.create(dto);
    await this.rolesRepository.save(dto);
    return role;
  }

  async getRoleByRole(role: string): Promise<Role> {
    return await this.rolesRepository.findOne({ where: { role: role } });
  }
}
