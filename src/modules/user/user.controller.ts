import {
  Get,
  Param,
  Controller,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  getUser(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }

  @Post()
  createUser(
    @Body() body: { username: string; email: string; password: string },
  ) {
    return this.userService.create(body);
  }

  @Patch('/:id')
  updateUser(
    @Param('id') id: number,
    @Body() body: { username: string; email: string; password: string },
  ) {
    return this.userService.update(id, body);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
