import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Subscription } from 'src/subscription/entities/subscription.entity';
import { Support } from 'src/support/entities/support.entity';
import { ViewHistory } from 'src/view-history/entities/view-history.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum Roles {
  admin = 'admin',
  user = 'user',
  superUser = 'superUser',
}

registerEnumType(Roles, {
  name: 'Roles', // Nombre que se utilizará en el esquema de GraphQL
  description: 'The roles of the users', // Opcional, descripción del enum
});

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column('text', { unique: true, nullable: false })
  @Field(() => String)
  email: string;

  @Column('text', { nullable: false })
  //@Field(() => String)
  password: string;

  @Column('text', { nullable: false })
  @Field(() => String)
  firstName: string;

  @Column('text', { nullable: false })
  @Field(() => String)
  lastName: string;

  @Field(() => [String], { nullable: true })
  views?: string[];

  @Column('text', { array: true, default: ['user'] })
  @Field(() => [String])
  roles: string[];

  @Column({ type: 'boolean', default: true })
  @Field(() => Boolean)
  isActive: boolean;

  @Field(() => Subscription) // Decorador para la relación Many-to-One con Suscription
  @ManyToOne(() => Subscription, (subscription) => subscription.users)
  subscription: Subscription;

  @Field(() => [ViewHistory]) // Decorador para la relación One-to-Many con ViewingsHistory
  @OneToMany(() => ViewHistory, (history) => history.user)
  viewingHistory: ViewHistory[];

  @Field(() => [Number], { nullable: true }) // Decorador para campos de tipo Array de números
  @Column({
    type: 'varchar',
    array: true,
    nullable: true,
  })
  favorites: number[];

  @Field(() => [Support]) // Decorador para la relación One-to-Many con Support
  @OneToMany(() => Support, (support) => support.user)
  support: Support[];
}
