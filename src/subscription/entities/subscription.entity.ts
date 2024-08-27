import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

enum Tipo {
  Premium = 'premium',
  Basic = 'basic',
  Free = 'free',
}

@ObjectType() // Decorador para convertir la clase en un tipo GraphQL
@Entity({
  name: 'subscription',
})
export class Subscription {
  @Field(() => ID) // Decorador para el campo ID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String) // Decorador para campos de tipo Enum/String
  @Column({
    type: 'enum',

    enum: Tipo,
  })
  tipo: Tipo;

  @Field(() => Float) // Decorador para campos de tipo decimal
  @Column({
    type: 'decimal',

    precision: 10,

    scale: 2,

    nullable: false,
  })
  price: number;

  @Field(() => [User]) // Relación One-to-Many expuesta como campo GraphQL
  @OneToMany(() => User, (user) => user.subscription, {
    eager: true,
  })
  users: User[];
}
