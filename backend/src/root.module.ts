import { Module } from '@nestjs/common';

import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { Auth0Module } from '@shared/auth0/auth0.module';

@Module({
  imports: [Auth0Module, ArticleModule, UserModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {}
