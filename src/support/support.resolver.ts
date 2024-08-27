import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SupportService } from './support.service';
import { Support } from './entities/support.entity';
import { CreateSupportInput } from './dto/inputs';
import { UpdateSupportInput } from './dto/inputs';

@Resolver(() => Support)
export class SupportResolver {
  constructor(private readonly supportService: SupportService) {}

  @Mutation(() => Support)
  async createSupport(
    @Args('createSupportInput') createSupportInput: CreateSupportInput,
  ) {
    return this.supportService.create(createSupportInput);
  }

  @Query(() => [Support], { name: 'supports' })
  async findAll(): Promise<Support[]> {
    return this.supportService.findAll();
  }

  @Query(() => Support, { name: 'support' })
  async findOne(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Support> {
    return this.supportService.findOne(id);
  }

  @Mutation(() => Support)
  async updateSupport(
    @Args('id', { type: () => String }) id: string,
    @Args('updateSupportInput') updateSupportDto: UpdateSupportInput,
  ): Promise<Support> {
    return this.supportService.update(id, updateSupportDto);
  }

  @Mutation(() => Support)
  async removeSupport(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Support> {
    return this.supportService.remove(id);
  }
}
