import { InputType, Field } from '@nestjs/graphql';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { Status, Type } from '../enums/content.enum';

@InputType()
export class CreateContentInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  description: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsUrl()
  @IsString()
  image?: string;

  @Field(() => String)
  @IsString()
  duration: string;

  @Field(() => [String])
  @IsArray()
  @IsString({ each: true })
  category: string[];

  @Field(() => Type, { nullable: true })
  @IsOptional()
  @IsEnum(Type)
  type?: Type;

  @Field(() => Status, { nullable: true })
  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @Field(() => [String])
  @IsArray()
  @IsString({ each: true })
  contentUrl: string[];
}
