import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString } from 'class-validator';

export class ArticleByIdParamDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  id: string;
}
