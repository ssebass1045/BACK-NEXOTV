import { Mutation, Resolver } from '@nestjs/graphql';
import { SeedService } from './seed.service';
import { Seed } from './entities/seed.entity';

@Resolver(() => Seed)
export class SeedResolver {
  constructor(private readonly seedService: SeedService) {}

  @Mutation(() => Boolean, {
    name: 'executeSeed',
    description: 'Ejecuta la construccion de la base de datos',
  })
  async executeSeed(): Promise<boolean> {
    return await this.seedService.executeSeed();
  }
}
