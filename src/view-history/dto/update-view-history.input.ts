import { CreateViewHistoryInput } from './create-view-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateViewHistoryInput extends PartialType(
  CreateViewHistoryInput,
) {
  @Field(() => Int)
  id: number;
}
