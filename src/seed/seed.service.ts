import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from 'src/content/entities/content.entity';
import { Repository } from 'typeorm';
import { SEED_DATA } from './data/seed-data';
import { ContentService } from '../content/content.service';

@Injectable()
export class SeedService {
  private isProd: boolean;

  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(Content)
    private readonly contentRepository: Repository<Content>,
    private readonly contentService: ContentService,
  ) {
    this.isProd = configService.get('STATE') === 'prod';
  }

  async executeSeed() {
    if (this.isProd)
      throw new UnauthorizedException('We cannot run Seed in production');
    await this.deleteDatabase();
    await this.loadContent();
    console.log(this.loadContent);
    return true;
  }

  async deleteDatabase() {
    await this.contentRepository
      .createQueryBuilder()
      .delete()
      .where({})
      .execute();
  }

  async loadContent(): Promise<Content> {
    const contents = [];

    for (const content of SEED_DATA) {
      contents.push(await this.contentService.create(content));
    }

    return contents[0];
  }
}
