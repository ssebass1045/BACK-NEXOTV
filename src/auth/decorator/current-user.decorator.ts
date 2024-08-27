import {
  createParamDecorator,
  ExecutionContext,
  ForbiddenException,
  InternalServerErrorException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ValidRoles } from '../enums/valid-roles.emun';

export const CurrentUser = createParamDecorator(
  (roles: ValidRoles[] = [], contex: ExecutionContext) => {
    console.log(roles);
    const ctx = GqlExecutionContext.create(contex);
    const user = ctx.getContext().req.user;

    if (!user) {
      throw new InternalServerErrorException(
        'Not user inside request - make use that we use the authGuards',
      );
    }

    if (roles.length === 0) return user;

    for (const role of user.roles) {
      if (roles.includes(role)) {
        return user;
      }
    }

    throw new ForbiddenException(`User need a valid role [${roles}]`);
  },
);
