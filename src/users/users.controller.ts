import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/users')
  getAllUsers() {
    return 'Obtengo todos los usuarios';
  }
}
