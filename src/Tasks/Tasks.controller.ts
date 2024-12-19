import { Controller, Get, Post } from '@nestjs/common';
//los controllers sirven para agregar la logica de programacion de la aplicacion
@Controller({})
export class TasksController {
  @Get('/tasks')
  getAllTasks() {
    return 'Obtengo todas las tareas';
  }
  @Get('/task')
  get_task() {
    return 'Obtengo una tarea';
  }
}
