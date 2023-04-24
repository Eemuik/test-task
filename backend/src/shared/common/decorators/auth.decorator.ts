import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';
import { ApiForbiddenResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

import { AuthGuard } from '../guards/auth.guard';
import { RolesGuard } from '../guards/roles.guard';

import { metadataKeys } from '../constants';

import { UserRole } from '../types';

export const Auth = (roles: UserRole[] = []) => {
  const decorators: Array<ClassDecorator | PropertyDecorator | MethodDecorator> = [
    ApiUnauthorizedResponse({
      description: 'Token is malformed or invalid',
    }),
    UseGuards(AuthGuard),
  ];

  if (roles.length) {
    decorators.push(
      SetMetadata(metadataKeys.roles, roles),
      ApiForbiddenResponse({ description: 'Permissions denied' }),
      UseGuards(RolesGuard),
    );
  }

  return applyDecorators(...decorators);
};
