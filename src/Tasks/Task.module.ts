import { Module } from '@nestjs/common';
import { TasksController } from './Tasks.controller';

// El decorador @Module() proporciona metadatos que Nest utiliza para organizar la estructura de la aplicación.
@Module({
  controllers: [TasksController],
})
export class TaskModule {}
