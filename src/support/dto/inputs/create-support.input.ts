import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateSupportInput {
  @Field(() => String)
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  descripcion_problema: string;
}
