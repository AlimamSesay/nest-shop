import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from 'src/entities';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) { }

  async showAll(page: number = 1) {
    const users = await this.userRepository.find({
      take: 25,
      skip: 25 * (page - 1),
    });
    return users.map(user => user.toResponseObject());
  }

  async read(id: string) {
    const user = await this.userRepository.findOne({
      where: { id }
    });
    if (!user) {
      throw new HttpException(
        'No User Found',
        HttpStatus.NOT_FOUND,
      );
    }
    return user.toResponseObject();
  }

  async login(data: Partial<UserDTO>) {
    const { email, password } = data;
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user || !(await user.comparePassword(password))) {
      throw new HttpException(
        'Invalid username/password',
        HttpStatus.BAD_REQUEST,
      );
    }
    return user.toResponseObject();
  }

  async register(data: UserDTO) {
    const { email } = data;
    let user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    user = await this.userRepository.create(data);
    await this.userRepository.save(user);
    return user.toResponseObject();
  }
}
