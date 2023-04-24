import { ApiProperty } from '@nestjs/swagger';

export class ArticleItem {
  @ApiProperty()
  id: string;

  @ApiProperty()
  text: string;
}
