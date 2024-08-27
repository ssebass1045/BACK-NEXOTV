import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsStrongPassword } from 'class-validator';

@InputType()
export class LoginInput {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsStrongPassword()
  password: string;
}
