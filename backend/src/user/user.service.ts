import { Inject, Injectable } from '@nestjs/common';

import { ManagementClient } from 'auth0';

import { MANAGEMENT_CLIENT_DEPENDENCY } from '@shared/common/constants';

@Injectable()
export class UserService {
  constructor(
    @Inject(MANAGEMENT_CLIENT_DEPENDENCY) private readonly managementClient: ManagementClient,
  ) {}

  async getMe(userId: string) {
    const userInfo = await this.managementClient.getUser({ id: userId });
    const roles = await this.managementClient.getUserRoles({ id: userId });

    return {
      info: userInfo,
      roles: roles.map((item) => item.name),
    };
  }
}
