import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller({}) //si esto esta lleno se puede acceder a la ruta /projects en el navegador
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {} //inyectamos el servicio de proyectos de forma abreviada

  @Get('/saludo')
  getSaludo() {
    return this.projectsService.getSaludo();
  }
}
