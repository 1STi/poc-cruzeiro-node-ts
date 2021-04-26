import { Injectable } from '@nestjs/common';
import { UserDomain } from '../models/user.domain';
import { IUser } from '../models/user.model';
import { UserRepository } from '../models/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  create(createUser: UserDomain): Promise<IUser> {
    return this.userRepository.save(createUser);
  }

  findAll(): Promise<IUser[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUser: UserDomain) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
