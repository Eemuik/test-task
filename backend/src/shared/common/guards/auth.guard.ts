import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { AuthenticationClient } from 'auth0';

import { AUTH_CLIENT_DEPENDENCY } from '../constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(AUTH_CLIENT_DEPENDENCY) private readonly authClient: AuthenticationClient) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;

    if (!authorization) throw new UnauthorizedException();

    const user = await this.authClient.getProfile(authorization).catch(() => null);

    if (!user) throw new UnauthorizedException();

    request.user = user;

    return true;
  }
}
