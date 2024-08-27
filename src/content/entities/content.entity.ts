import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ViewHistory } from 'src/view-history/entities/view-history.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Status, Type } from '../dto/enums/content.enum';

@ObjectType()
@Entity({
  name: 'content',
})
export class Content {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column({
    type: 'varchar',
    length: 100,
  })
  @IsNotEmpty()
  title: string;

  @Field(() => String)
  @Column('text')
  description: string;

  @Field(() => String, { nullable: true })
  @Column('text', { nullable: true })
  image?: string;

  @Field(() => String)
  @Column('text')
  duration: string;

  @Field(() => [String])
  @Column('varchar', { array: true, default: [] })
  category: string[];

  @Field(() => Type, { nullable: true })
  @Column({
    type: 'enum',
    enum: Type,
    nullable: true,
  })
  type?: Type;

  @Field(() => Status, { nullable: true })
  @Column({
    type: 'enum',
    enum: Status,
    nullable: true,
  })
  status?: Status;

  @Field(() => [String])
  @Column('varchar', { array: true, default: [] })
  contentUrl: string[];

  @Field(() => [ViewHistory], { nullable: true })
  @OneToMany(() => ViewHistory, (history) => history.contenido, {
    nullable: true,
  })
  viewingHistories?: ViewHistory[];
}
