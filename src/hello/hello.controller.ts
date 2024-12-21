import { Controller, Get, Req, Request, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('/hello')
export class HelloController {
  @Get('/Home')
  index(@Request() request: Request, @Res() response: Response) {
    // el status y el send son de express y no de nestjs
    response.status(200).send('Hello World!');
  }
  //el send permite enviar mensajes simples

  @Get('/json') //ejemplo de retornar un json con el status code
  json(@Req() request: Request, @Res() response: Response) {
    response.json({
      respuesta: response.statusCode,
    });
  }
}
