import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getSaludo() {
    return ['Hola', 'Mundo'];
  }
}
