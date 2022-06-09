import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RolesService } from './roles/roles.service';
import { RolesController } from './roles/roles.controller';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.entity';
import { UserRoles } from './roles/user-roles.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env['MYSQL_HOST '],
      port: Number(process.env['MYSQL_PORT']),
      username: process.env['MYSQL_USERNAME'],
      password: process.env['MYSQL_PASSWORD'],
      database: process.env['MYSQL_DB'],
      entities: [User, Role, UserRoles],
      synchronize: true,
    }),
    AuthModule,
    RolesModule,
  ],
  controllers: [AppController, RolesController],
  providers: [AppService, RolesService],
})
export class AppModule {}
