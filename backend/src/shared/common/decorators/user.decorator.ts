import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator((field: 'sub' | 'email', context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();

  return request.user?.[field] ?? request.user;
});
