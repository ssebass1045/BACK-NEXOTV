import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetricsModule } from './metrics/metrics.module';
import { ViewHistoryModule } from './view-history/view-history.module';
import { SupportModule } from './support/support.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { ContentModule } from './content/content.module';
import { AuthModule } from './auth/auth.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    MetricsModule,
    ViewHistoryModule,
    SupportModule,
    SubscriptionModule,
    ContentModule,
    AuthModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
