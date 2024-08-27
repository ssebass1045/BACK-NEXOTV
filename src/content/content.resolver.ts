import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Content } from './entities/content.entity';
import { ContentService } from './content.service';
import { CreateContentInput } from './dto/inputs/create-content.input';
import { UpdateContentInput } from './dto/inputs/update-content.input';
import { PaginationContentArgs } from './dto/args/pagination-content.args';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { CurrentUser } from 'src/auth/decorator/current-user.decorator';
import { ValidRoles } from 'src/auth/enums/valid-roles.emun';

@Resolver(() => Content)
@UseGuards(JwtAuthGuard)
export class ContentResolver {
  constructor(private readonly contentService: ContentService) {}

  @Mutation(() => Content)
  createContent(
    @Args('createContentInput') createContentInput: CreateContentInput,
    @CurrentUser([ValidRoles.admin]) content: Content,
  ) {
    console.log(content);
    return this.contentService.create(createContentInput);
  }

  @Query(() => [Content], { name: 'contentAll' })
  findAll(
    @Args('paginationContentArgs') paginationContentArgs: PaginationContentArgs,
  ) {
    return this.contentService.findAll(paginationContentArgs);
  }

  @Query(() => Content, { name: 'contentOne' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.contentService.findOne(id);
  }

  @Mutation(() => Content)
  updateContent(
    @Args('updateContentInput') updateContentInput: UpdateContentInput,
    @CurrentUser([ValidRoles.admin]) content: Content,
  ) {
    console.log(content);
    return this.contentService.update(
      updateContentInput.id,
      updateContentInput,
    );
  }

  @Mutation(() => Content)
  removeContent(
    @Args('id', { type: () => String }) id: string,
    @CurrentUser([ValidRoles.admin]) content: Content,
  ) {
    console.log(content);
    return this.contentService.remove(id);
  }
}
