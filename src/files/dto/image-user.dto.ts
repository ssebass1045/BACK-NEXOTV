import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class UpdateImageUserDto {
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  userImage: string[];
}
