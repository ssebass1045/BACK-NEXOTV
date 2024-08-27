import { Module } from '@nestjs/common';
import { SupportService } from './support.service';
import { SupportResolver } from './support.resolver';
import { Support } from './entities/support.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Module({
  providers: [SupportResolver, SupportService],
  imports: [TypeOrmModule.forFeature([Support, User])],
})
export class SupportModule {}
