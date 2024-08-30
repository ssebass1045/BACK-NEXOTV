import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { ConfigModule } from '@nestjs/config';
import { ContentModule } from 'src/content/content.module';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [ConfigModule, ContentModule],
})
export class FilesModule {}
