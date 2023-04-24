import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { ManagementClient } from 'auth0';

import { MANAGEMENT_CLIENT_DEPENDENCY, metadataKeys } from '../constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    @Inject(MANAGEMENT_CLIENT_DEPENDENCY) private readonly managementClient: ManagementClient,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const roles: string[] = this.reflector.getAllAndOverride(metadataKeys.roles, [
      context.getClass(),
      context.getHandler(),
    ]);

    if (!request.user) throw new UnauthorizedException();

    const userRoles = await this.managementClient.getUserRoles({
      id: request.user.sub,
    });
    const userRolesNames = userRoles.map((item) => item.name);
    const isAuthorized = roles.every((item) => userRolesNames.includes(item));

    return isAuthorized;
  }
}
