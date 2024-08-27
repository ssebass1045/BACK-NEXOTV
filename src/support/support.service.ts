import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Support } from './entities/support.entity';
import { CreateSupportInput, UpdateSupportInput } from './dto/inputs';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SupportService {
  constructor(
    @InjectRepository(Support)
    private readonly supportRepository: Repository<Support>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createSupportDto: CreateSupportInput): Promise<Support> {
    const user = await this.userRepository.findOneBy({
      id: createSupportDto.userId,
    });

    if (!user) {
      throw new NotFoundException(
        `User with ID ${createSupportDto.userId} not found`,
      );
    }

    const support = this.supportRepository.create({
      ...createSupportDto,
      user,
      fecha_solicitud: new Date(),
    });

    return this.supportRepository.save(support);
  }

  async findAll(): Promise<Support[]> {
    return this.supportRepository.find({ relations: ['user'] });
  }

  async findOne(id: string): Promise<Support> {
    const support = await this.supportRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!support) {
      throw new NotFoundException(`Support request with ID ${id} not found`);
    }

    return support;
  }

  async update(
    id: string,
    updateSupportDto: UpdateSupportInput,
  ): Promise<Support> {
    const support = await this.findOne(id);

    Object.assign(support, updateSupportDto);
    return this.supportRepository.save(support);
  }

  async remove(id: string): Promise<Support> {
    const support = await this.findOne(id);
    return this.supportRepository.remove(support);
  }
}
