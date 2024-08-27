import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSeedInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
