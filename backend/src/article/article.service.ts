import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';

import { promises } from 'fs';

import { CreateArticleBodyDto } from './dto/body/create-article.body-dto';
import { UpdateArticleBodyDto } from './dto/body/update-article.body-dto';

@Injectable()
export class ArticleService {
  async getArticles() {
    const files = await promises.readdir('assets');

    return Promise.all(
      files.map(async (file: string) => {
        const buffer = await promises.readFile(`assets/${file}`);

        return { id: file, text: buffer.toString() };
      }),
    );
  }

  async createArticle(body: CreateArticleBodyDto) {
    const fileName = `${body.id}.txt`;
    const files = await promises.readdir('assets');

    if (files.includes(fileName)) throw new ConflictException();

    await promises.writeFile(`assets/${fileName}`, body.text);
  }

  async updateArticle(body: UpdateArticleBodyDto, id: string) {
    await promises.writeFile(`assets/${id}`, body.text);
  }

  async deleteArticle(id: string) {
    const files = await promises.readdir('assets');

    if (!files.includes(id)) throw new NotFoundException();

    await promises.unlink(`assets/${id}`);
  }

  async getArticleById(id: string) {
    const files = await promises.readdir('assets');

    if (!files.includes(id)) throw new NotFoundException();

    const buffer = await promises.readFile(`assets/${id}`);

    return {
      id,
      text: buffer.toString(),
    };
  }
}
