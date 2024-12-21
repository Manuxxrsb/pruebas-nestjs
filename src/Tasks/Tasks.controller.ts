import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './Task.service';
//los controllers sirven para agregar la logica de programacion de la aplicacion
@Controller('/tasks') //ruta del endpoint para acceder a los metodos del controller
export class TasksController {
  ServicioTarea: TaskService;
  constructor(ServicioTarea: TaskService) {
    this.ServicioTarea = ServicioTarea;
  }

  //metodo que retorna un string , en caso de no ser string lo que retorne falla por TypeError
  @Get()
  getAllTasks(): string {
    return 'Obtengo todas las tareas';
  }

  //Decorador Param Nativo de NestJS para obtener los parametros de la peticion
  @Get('/:id') //ruta que recibe un id como parametro
  getTask(@Param('id') id: number): string {
    return 'El ID de la tarea es: ' + id;
  }

  //Decorador Body Nativo de NestJS para obtener el cuerpo de la peticion
  @Post()
  createTasks(@Body() Task: any) {
    return Task;
  }

  @Put()
  UpdateTasks(): string {
    return 'Update de una tarea';
  }

  @Patch()
  UpdatepatchTasks() {
    return 'actualice un valor del objeto tarea';
  }

  @Get('/Saludo') //ruta personalizada para acceder a un metodo especifico
  get_taskSaludo() {
    return this.ServicioTarea.getSaludo();
  }
}
