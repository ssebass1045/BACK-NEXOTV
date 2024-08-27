import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsOptional } from 'class-validator';

@ArgsType()
@InputType()
export class PaginationArgs {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  limit?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  offset?: number;
}
