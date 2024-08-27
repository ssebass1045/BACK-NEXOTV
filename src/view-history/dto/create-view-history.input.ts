import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateViewHistoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
