import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateSupportInput } from './create-support.input';
import { IsString } from 'class-validator';

@InputType()
export class UpdateSupportInput extends PartialType(CreateSupportInput) {
  @Field(() => String)
  @IsString()
  descripcion_problema?: string;
}
