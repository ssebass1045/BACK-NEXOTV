import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Content } from 'src/content/entities/content.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType() // Decorador para convertir la clase en un tipo GraphQL
@Entity({
  name: 'view-history',
})
export class ViewHistory {
  @Field(() => ID) // Decorador para el campo ID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => User) // Decorador para la relación Many-to-One con User
  @ManyToOne(() => User, (user) => user.viewingHistory)
  user: User;

  @Field(() => Content) // Decorador para la relación Many-to-One con Contenido
  @ManyToOne(() => Content, (contenido) => contenido.viewingHistories)
  @JoinColumn({ name: 'contenido_id' })
  contenido: Content;

  @Field() // Decorador para el campo fecha_visualizacion
  @Column({
    type: 'date',
  })
  fecha_visualizacion: Date;
}
