import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './Dto/Create-User.dto';

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

  //Data Transfer Object (DTO) Aplicado para que al pesionar el . se muestre las propiedades del objeto
  @Get('/dto')
  createUser(@Body() Usuario: CreateUserDto): CreateUserDto {
    console.log('Nombre de usuario: ' + Usuario.name);
    console.log('Email de usuario: ' + Usuario.email);
    return Usuario;
  }
}
