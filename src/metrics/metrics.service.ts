import { Injectable } from '@nestjs/common';
import { CreateMetricInput } from './dto/create-metric.input';
import { UpdateMetricInput } from './dto/update-metric.input';

@Injectable()
export class MetricsService {
  create(createMetricInput: CreateMetricInput) {
    return 'This action adds a new metric';
  }

  findAll() {
    return `This action returns all metrics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metric`;
  }

  update(id: number, updateMetricInput: UpdateMetricInput) {
    return `This action updates a #${id} metric`;
  }

  remove(id: number) {
    return `This action removes a #${id} metric`;
  }
}
