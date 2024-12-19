import { Module } from '@nestjs/common';
import { TaskModule } from './Tasks/Task.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { ProjectController } from './project/project.controller';

@Module({
  imports: [TaskModule, ProjectsModule, UsersModule],
  controllers: [ProjectController],
})
export class AppModule {}
