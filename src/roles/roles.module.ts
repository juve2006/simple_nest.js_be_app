import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './roles.entity';
import { User } from '../users/users.entity';
import { UserRoles } from "./user-roles.entity";

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [TypeOrmModule.forFeature([Role, User, UserRoles])],
})
export class RolesModule {}
