import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput, SignupInput } from './dto/input';
import { AuthResponse } from './types/auth-response.type';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guards';
import { CurrentUser } from './decorator/current-user.decorator';
import { User } from 'src/users/entities/user.entity';
//import { ValidRoles } from './enums/valid-roles.emun';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse, { name: 'signup' })
  signup(@Args('signupInput') signupInput: SignupInput): Promise<AuthResponse> {
    return this.authService.signup(signupInput);
  }

  @Mutation(() => AuthResponse, { name: 'login' })
  async login(
    @Args('loginInput') loginInput: LoginInput,
  ): Promise<AuthResponse> {
    return await this.authService.login(loginInput);
  }

  @Query(() => AuthResponse, { name: 'revalite' })
  @UseGuards(JwtAuthGuard)
  revalidateToken(
    @CurrentUser(/*[ValidRoles.admin]*/) user: User,
  ): AuthResponse {
    return this.authService.revalidateToken(user);
  }
}
