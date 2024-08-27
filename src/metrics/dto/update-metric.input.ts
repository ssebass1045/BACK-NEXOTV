import { CreateMetricInput } from './create-metric.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMetricInput extends PartialType(CreateMetricInput) {
  @Field(() => Int)
  id: number;
}
