import { Module } from '@nestjs/common';
import { TasksController } from './Tasks.controller';
import { TaskService } from './Task.service';

// El decorador @Module() proporciona metadatos que Nest utiliza para organizar la estructura de la aplicación.
@Module({
  controllers: [TasksController], //controllers es para agregar la logica de programacion de la aplicacion
  providers: [TaskService], //provider es para servicios
})
export class TaskModule {}
