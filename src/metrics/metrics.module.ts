import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { MetricsResolver } from './metrics.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metrics } from './entities/metric.entity';

@Module({
  providers: [MetricsResolver, MetricsService],
  imports: [TypeOrmModule.forFeature([Metrics])],
})
export class MetricsModule {}
