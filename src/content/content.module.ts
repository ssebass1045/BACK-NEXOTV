import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentResolver } from './content.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './entities/content.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [ContentResolver, ContentService],
  imports: [TypeOrmModule.forFeature([Content]), AuthModule],
  exports: [TypeOrmModule, ContentService],
})
export class ContentModule {}
