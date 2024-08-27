import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMetricInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
