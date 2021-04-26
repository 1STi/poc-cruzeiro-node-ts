import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUsers } from './entities/user.entity';
import { UserRepository } from './entities/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  create(createUserDto: CreateUserDto): Promise<IUsers> {
    return this.userRepository.save(createUserDto);
  }

  findAll(): Promise<IUsers[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
