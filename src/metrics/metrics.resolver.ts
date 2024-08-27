import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MetricsService } from './metrics.service';
import { Metrics } from './entities/metric.entity';
import { CreateMetricInput } from './dto/create-metric.input';
import { UpdateMetricInput } from './dto/update-metric.input';

@Resolver(() => Metrics)
export class MetricsResolver {
  constructor(private readonly metricsService: MetricsService) {}

  @Mutation(() => Metrics)
  createMetric(
    @Args('createMetricInput') createMetricInput: CreateMetricInput,
  ) {
    return this.metricsService.create(createMetricInput);
  }

  @Query(() => [Metrics], { name: 'metrics' })
  findAll() {
    return this.metricsService.findAll();
  }

  @Query(() => Metrics, { name: 'metric' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.metricsService.findOne(id);
  }

  @Mutation(() => Metrics)
  updateMetric(
    @Args('updateMetricInput') updateMetricInput: UpdateMetricInput,
  ) {
    return this.metricsService.update(updateMetricInput.id, updateMetricInput);
  }

  @Mutation(() => Metrics)
  removeMetric(@Args('id', { type: () => Int }) id: number) {
    return this.metricsService.remove(id);
  }
}
