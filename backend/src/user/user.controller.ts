import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';

import { Auth } from '@shared/common/decorators/auth.decorator';
import { User } from '@shared/common/decorators/user.decorator';

import { UserItem } from './docs';

@Controller('/user')
@Auth()
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/me')
  @ApiOperation({
    summary: 'Get me',
  })
  @ApiOkResponse({
    type: UserItem,
    description: 'Successful current user getting',
  })
  getMe(@User('sub') userId: string) {
    return this.userService.getMe(userId);
  }
}
