import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from 'src/dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly _user: UserService) {}
  @Get()
  login(): string {
    return 'Hello login';
  }
  @Post('create')
  singUp(@Body() user: UserDto) {
    const createdUser = this._user.create(user);
    return createdUser;
  }
  @Get('list')
  users() {
    return this._user.findAll();
  }
}
