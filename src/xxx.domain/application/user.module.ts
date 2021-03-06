import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../models/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
