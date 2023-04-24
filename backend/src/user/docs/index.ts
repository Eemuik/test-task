import { ApiProperty } from '@nestjs/swagger';

import { UserRole } from '@shared/common/types';

import { userRole } from '@shared/common/constants';

export class UserInfo {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  user_id: string;
}

export class UserItem {
  @ApiProperty({ type: UserInfo })
  info: UserInfo;

  @ApiProperty({ enum: Object.values(userRole), isArray: true })
  roles: UserRole[];
}
