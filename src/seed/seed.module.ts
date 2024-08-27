import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedResolver } from './seed.resolver';
import { ConfigModule } from '@nestjs/config';
import { ContentModule } from 'src/content/content.module';

@Module({
  providers: [SeedResolver, SeedService],
  imports: [ConfigModule, ContentModule],
})
export class SeedModule {}
