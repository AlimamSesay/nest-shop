import {
  Controller,
  Get,
  Post,
  UsePipes,
  Body,
  Query,
  Param,
  UseGuards,
} from '@nestjs/common';

import { ValidationPipe } from '../shared/validation.pipe';
import { AuthGuard } from '../shared/auth.gaurd';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { User } from './user.decorator';

@Controller()
export class UserController {
  constructor(private userService: UserService) { }

  @Get('api/users')
  showAllUsers(@Query('page') page: number) {
    return this.userService.showAll(page);
  }

  @Get('api/users/:id')
  showOneUser(@Param('id') id: string) {
    return this.userService.read(id);
  }

  @Get('auth/whoami')
  @UseGuards(new AuthGuard())
  showMe(@User('email') email: string) {
    return this.userService.read(email);
  }

  @Post('auth/login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: Partial<UserDTO>) {
    return this.userService.login(data);
  }

  @Post('auth/register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDTO) {
    return this.userService.register(data);
  }
}
