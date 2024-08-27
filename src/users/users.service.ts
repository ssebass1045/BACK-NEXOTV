import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserInput } from './dto/inputs';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationArgs } from './dto/args/pagination.args';
import * as bcrypt from 'bcrypt';
import { SignupInput } from '../auth/dto/input/signup.input';
import { ValidRoles } from 'src/auth/enums/valid-roles.emun';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  private logger = new Logger('UsersServices');

  async create(signupInput: SignupInput): Promise<User> {
    const { password, ...restData } = signupInput;

    try {
      const newUser = this.usersRepository.create({
        ...restData,
        password: bcrypt.hashSync(password, 10),
      });
      return await this.usersRepository.save(newUser);
    } catch (error) {
      console.log(error);
      this.handleDbErros(error);
    }
  }

  async findAll(
    paginationArgs: PaginationArgs,
    validRolesArgs: ValidRoles[],
  ): Promise<User[]> {
    const { limit = 10, offset = 0 } = paginationArgs;
    try {
      if (validRolesArgs.length === 0)
        return await this.usersRepository.find({
          take: limit,
          skip: offset,
        });

      return this.usersRepository
        .createQueryBuilder()
        .andWhere('ARRAY[roles] && ARRAY[:...roles]')
        .setParameter('roles', validRolesArgs)
        .getMany();
    } catch (error) {
      this.handleDbErros(error);
    }
  }

  async findOne(id: string): Promise<User> {
    try {
      const user = await this.usersRepository.findOneBy({ id });
      if (!user) throw new NotFoundException(`User with id: ${id} not found`);
      return user;
    } catch (error) {
      this.handleDbErros(error);
    }
  }

  async findOneByEmail(email: string): Promise<User> {
    try {
      return await this.usersRepository.findOneByOrFail({ email });
    } catch (error) {
      this.handleDbErros({
        code: 'error-001',
        detail: `${email} not found`,
      });
    }
  }

  async findOneById(id: string): Promise<User> {
    try {
      return await this.usersRepository.findOneByOrFail({ id });
    } catch (error) {
      this.handleDbErros({
        code: 'error-001',
        detail: `${id} not found`,
      });
    }
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    try {
      const user = await this.usersRepository.preload({
        id,
        ...updateUserInput,
      });
      if (!user) throw new NotFoundException(`User with id: ${id} not found`);
      return await this.usersRepository.save(user);
    } catch (error) {
      this.handleDbErros(error);
    }
  }

  async remove(id: string): Promise<string> {
    try {
      const user = await this.findOne(id);
      user.isActive = false;
      const updateUser = await this.usersRepository.preload({
        id,
        ...user,
      });
      await this.usersRepository.save(updateUser);

      return `This action removes a #${id} user`;
    } catch (error) {
      this.handleDbErros(error);
    }
  }

  private handleDbErros(error: any): never {
    console.log(error);
    if (error.code === '23505')
      throw new BadRequestException(error.detail.replace('Key ', ''));

    if (error.code === 'error-001')
      throw new BadRequestException(error.detail.replace('Key ', ''));

    this.logger.error(error);

    throw new InternalServerErrorException('Pleace check server logs');
  }
}
