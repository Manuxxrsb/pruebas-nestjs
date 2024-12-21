import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  getSaludo(): string {
    return 'Hola desde el servicio de proyectos';
  }
}
