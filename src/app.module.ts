import { Module } from '@nestjs/common';
import { TaskModule } from './Tasks/Task.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [TaskModule, ProjectsModule, UsersModule, HelloModule],
})
export class AppModule {}
