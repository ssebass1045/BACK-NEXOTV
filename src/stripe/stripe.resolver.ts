import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { StripeService } from './stripe.service';

@Resolver()
export class StripeResolver {
  constructor(private readonly stripeService: StripeService) {}

  @Mutation(() => String) // Define el tipo de retorno, en este caso un ID de sesión (string)
  async createCheckoutSession(@Args('priceId') priceId: string): Promise<string> {
    const session = await this.stripeService.createCheckoutSession(priceId);
    return session.id; // Retorna el ID de la sesión de Stripe
  }
}