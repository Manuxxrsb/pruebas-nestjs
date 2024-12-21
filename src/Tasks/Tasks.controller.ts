import { Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './Task.service';
//los controllers sirven para agregar la logica de programacion de la aplicacion
@Controller({})
export class TasksController {
  ServicioTarea: TaskService;
  constructor(ServicioTarea: TaskService) {
    this.ServicioTarea = ServicioTarea;
  }

  @Get('/tasks')
  getAllTasks() {
    return 'Obtengo todas las tareas';
  }
  @Get('/task')
  get_task() {
    return 'Obtengo una tarea';
  }

  @Get('/taskSaludo')
  get_taskSaludo() {
    return this.ServicioTarea.getSaludo();
  }
}
