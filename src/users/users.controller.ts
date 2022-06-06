import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAll(): string {
    return 'getAll';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne' + id;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): string {
    return `${createUserDto.name}`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'remove' + id;
  }

  @Put(':id')
  update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string) {
    return 'Update' + id;
  }
}
