import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionResolver } from './subscription.resolver';
import { Subscription } from './entities/subscription.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [SubscriptionResolver, SubscriptionService],
  imports: [TypeOrmModule.forFeature([Subscription])],
})
export class SubscriptionModule {}
