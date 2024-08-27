import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsArray } from 'class-validator';
import { ValidRoles } from 'src/auth/enums/valid-roles.emun';

@ArgsType()
@InputType()
export class ValidRolesArgs {
  @Field(() => [ValidRoles], { nullable: true })
  @IsArray()
  roles: ValidRoles[] = [];
}
