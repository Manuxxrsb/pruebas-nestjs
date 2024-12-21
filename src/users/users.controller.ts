import { Controller, Get } from '@nestjs/common';

interface User {
  id: number;
  name: string;
}

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return 'Obtengo todos los usuarios';
  }

  @Get('/usuario') //al retornar un objeto user no falla
  getUser(): User {
    return {
      id: 1,
      name: 'Manuel Solis',
    };
  }
  v;
}
