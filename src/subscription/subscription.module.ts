import { Module } from '@nestjs/common';
import { Subscription } from './entities/subscription.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SubscriptionResolver } from './subscription.resolver';
import { SubscriptionService } from './subscription.service';

@Module({
  providers: [SubscriptionResolver, SubscriptionService],
  imports: [TypeOrmModule.forFeature([Subscription])],
})
export class SubscriptionModule {}
