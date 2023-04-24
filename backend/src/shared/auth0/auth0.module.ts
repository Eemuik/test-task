import { Global, Module } from '@nestjs/common';

import { AuthenticationClient, ManagementClient } from 'auth0';

import { auth0ConnectionOptions } from './constants';
import { AUTH_CLIENT_DEPENDENCY, MANAGEMENT_CLIENT_DEPENDENCY } from '@shared/common/constants';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: AUTH_CLIENT_DEPENDENCY,
      useValue: new AuthenticationClient(auth0ConnectionOptions),
    },
    {
      provide: MANAGEMENT_CLIENT_DEPENDENCY,
      useValue: new ManagementClient(auth0ConnectionOptions),
    },
  ],
  exports: [AUTH_CLIENT_DEPENDENCY, MANAGEMENT_CLIENT_DEPENDENCY],
})
export class Auth0Module {}
