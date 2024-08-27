import { ObjectType, Field, ID } from '@nestjs/graphql';
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
  name: 'support',
})
export class Support {
  @Field(() => ID) // Decorador para el campo ID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => User) // Relación Many-to-One expuesta como campo GraphQL
  @ManyToOne(() => User, (user) => user.support)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Field(() => Date) // Decorador para campos de tipo Date
  @Column({
    type: 'date',
  })
  fecha_solicitud: Date;

  @Field(() => String) // Decorador para campos de tipo String
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  descripcion_problema: string;
}
