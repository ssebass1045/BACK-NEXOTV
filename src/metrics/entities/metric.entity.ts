import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // Decorador para convertir la clase en un tipo GraphQL
@Entity({
  name: 'metrics',
})
export class Metrics {
  @Field(() => ID) // Decorador para el campo ID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Number) // Decorador para campos de tipo número
  @Column({
    type: 'int',
  })
  cantidad_usuarios_registrados: number;

  @Field(() => Number) // Decorador para campos de tipo número
  @Column({
    type: 'int',
  })
  cantidad_usuarios_premium: number;

  @Field(() => Number) // Decorador para campos de tipo número
  @Column({
    type: 'int',
  })
  cantidad_usuarios_free: number;
}
