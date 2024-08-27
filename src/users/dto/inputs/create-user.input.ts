import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsStrongPassword, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsStrongPassword()
  password: string;

  @Field(() => String)
  @IsNotEmpty()
  @Length(1, 40)
  firstName: string;

  @Field(() => String)
  @IsNotEmpty()
  @Length(1, 40)
  lastName: string;
}
