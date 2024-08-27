import { Module } from '@nestjs/common';
import { ViewHistoryService } from './view-history.service';
import { ViewHistoryResolver } from './view-history.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViewHistory } from './entities/view-history.entity';

@Module({
  providers: [ViewHistoryResolver, ViewHistoryService],
  imports: [TypeOrmModule.forFeature([ViewHistory])],
})
export class ViewHistoryModule {}
