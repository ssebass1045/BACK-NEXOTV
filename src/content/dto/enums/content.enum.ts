import { registerEnumType } from '@nestjs/graphql';

export enum Type {
  channel = 'channel',
  movie = 'movie',
  series = 'series',
}

export enum Status {
  active = 'active',
  inactive = 'inactive',
}

registerEnumType(Type, { name: 'Type' });
registerEnumType(Status, { name: 'Status' });
