import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput, UpdateUserInput } from './dto/inputs';
import { PaginationArgs } from './dto/args/pagination.args';
import { ValidRolesArgs } from './dto/args/roles.args';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { CurrentUser } from 'src/auth/decorator/current-user.decorator';
import { ValidRoles } from 'src/auth/enums/valid-roles.emun';

@Resolver(() => User)
@UseGuards(JwtAuthGuard)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return await this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  async findAll(
    @Args('paginationArgs') paginationArgs: PaginationArgs,
    @Args('validRolesArgs') validRolesArgs: ValidRolesArgs,
    @CurrentUser([ValidRoles.admin]) user: User,
  ): Promise<User[]> {
    console.log(user);
    return await this.usersService.findAll(
      paginationArgs,
      validRolesArgs.roles,
    );
  }

  @Query(() => User, { name: 'user' })
  async findOne(
    @Args('id', { type: () => String }) id: string,
    @CurrentUser([ValidRoles.admin]) user: User,
  ): Promise<User> {
    console.log(user);
    return await this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @CurrentUser([ValidRoles.admin]) user: User,
  ) {
    console.log(user);
    return await this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => String)
  async removeUser(
    @Args('id', { type: () => String }) id: string,
    @CurrentUser([ValidRoles.admin]) user: User,
  ): Promise<string> {
    console.log(user);
    return await this.usersService.remove(id);
  }
}
