import { CreateSeedInput } from './create-seed.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSeedInput extends PartialType(CreateSeedInput) {
  @Field(() => Int)
  id: number;
}
