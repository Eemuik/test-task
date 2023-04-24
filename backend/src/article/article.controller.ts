import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ArticleService } from './article.service';

import { Auth } from '@shared/common/decorators/auth.decorator';

import { CreateArticleBodyDto } from './dto/body/create-article.body-dto';
import { UpdateArticleBodyDto } from './dto/body/update-article.body-dto';
import { ArticleByIdParamDto } from './dto/param/article-by-id.param-dto';

import { ArticleItem } from './docs';

@Controller('/article')
@ApiTags('Article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  @ApiOperation({
    summary: 'Get articles',
  })
  @ApiCreatedResponse({
    description: 'Successful article getting',
    type: [ArticleItem],
  })
  getArticles() {
    return this.articleService.getArticles();
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Get article',
  })
  @ApiOkResponse({
    description: 'Successful article getting',
  })
  getArticle(@Param() { id }: ArticleByIdParamDto) {
    return this.articleService.getArticleById(id);
  }

  @Post()
  @Auth(['admin'])
  @ApiOperation({
    summary: 'Create article',
  })
  @ApiCreatedResponse({
    description: 'Successful article creation',
  })
  createArticle(@Body() body: CreateArticleBodyDto) {
    return this.articleService.createArticle(body);
  }

  @Patch('/:id')
  @Auth(['admin'])
  @ApiOperation({
    summary: 'Update article',
  })
  @ApiOkResponse({
    description: 'Successful article updation',
  })
  updateArticle(@Body() body: UpdateArticleBodyDto, @Param() { id }: ArticleByIdParamDto) {
    return this.articleService.updateArticle(body, id);
  }

  @Delete('/:id')
  @Auth(['admin'])
  @ApiOperation({
    summary: 'Delete article',
  })
  @ApiOkResponse({
    description: 'Successful article deletion',
  })
  deleteArticle(@Param() { id }: ArticleByIdParamDto) {
    return this.articleService.deleteArticle(id);
  }
}
