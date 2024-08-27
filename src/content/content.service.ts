import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from './entities/content.entity';
import { CreateContentInput } from './dto/inputs/create-content.input';
import { UpdateContentInput } from './dto/inputs/update-content.input';
import { Status, Type } from './dto/enums/content.enum';
import { PaginationContentArgs } from './dto/args/pagination-content.args';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private readonly contenidoRepository: Repository<Content>,
  ) {}

  private logger = new Logger('ContentService');

  async create(createContenidoInput: CreateContentInput): Promise<Content> {
    try {
      const newContenido =
        this.contenidoRepository.create(createContenidoInput);
      return await this.contenidoRepository.save(newContenido);
    } catch (error) {
      this.handleDbErros(error);
    }
  }

  async findAll(
    paginationContentArgs: PaginationContentArgs,
  ): Promise<Content[]> {
    const { limit = 10, offset = 0 } = paginationContentArgs;

    try {
      const content = await this.contenidoRepository.find({
        skip: offset,
        take: limit,
      });
      return content;
    } catch (error) {
      this.handleDbErros(error);
    }
  }

  async findOne(id: string): Promise<Content> {
    try {
      const contenido = await this.contenidoRepository.findOne({
        where: { id },
      });
      if (!contenido) {
        throw new NotFoundException(`Content with id: ${id} not found`);
      }
      return contenido;
    } catch (error) {
      this.handleDbErros(error);
    }
  }

  async update(
    id: string,
    updateContenidoInput: UpdateContentInput,
  ): Promise<Content> {
    try {
      const contenido = await this.contenidoRepository.preload({
        id,
        ...updateContenidoInput,
      });

      if (!contenido) {
        throw new NotFoundException(`Content with id: ${id} not found`);
      }

      return this.contenidoRepository.save(contenido);
    } catch (error) {
      this.handleDbErros(error);
    }
  }

  async remove(id: string): Promise<Content> {
    try {
      const content = await this.findOne(id);
      content.status = Status.inactive;
      const updateContent = await this.contenidoRepository.preload({
        id,
        ...content,
      });
      return await this.contenidoRepository.save(updateContent);
    } catch (error) {
      this.handleDbErros(error);
    }
  }

  async findByTipo(type: Type): Promise<Content[]> {
    try {
      const content = this.contenidoRepository.find({ where: { type } });
      if (!content) {
        throw new NotFoundException(`Content with type: ${type} not found`);
      }
      return content;
    } catch (error) {
      this.handleDbErros(error);
    }
  }

  async findByEstado(status: Status): Promise<Content[]> {
    try {
      const content = this.contenidoRepository.find({ where: { status } });
      if (!content) {
        throw new NotFoundException(`Content with type: ${status} not found`);
      }
      return content;
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
