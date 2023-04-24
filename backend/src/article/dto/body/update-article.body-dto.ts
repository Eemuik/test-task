import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateArticleBodyDto {
  @IsString()
  @IsNotEmpty()
  text: string;
}
