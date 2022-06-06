import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

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
  create(@Body() ) {

  }
  @Delete()
  remove() {

  }
  @Put()
  update() {

  }
}
