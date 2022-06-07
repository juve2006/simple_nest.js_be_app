import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getAll() {
    return await this.usersRepository.find();
  }

  async getOne(id: string) {
    return await this.usersRepository.findOne({ where: { id: id } });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    await this.usersRepository.save(createUserDto);
    return user;
  }

  async update(id: string, updateUserDto: Partial<UpdateUserDto>) {
    await this.usersRepository.update({ id }, updateUserDto);
    return await this.usersRepository.findOne({ where: { id: id } });
  }
}
