# Instrucciones e Instalación de NestJS

## Requisitos Previos

- Node.js (versión 12 o superior)
- npm (versión 6 o superior)

## Instalación

1. **Instalar Nest CLI**:

   ```bash
   npm install -g @nestjs/cli
   ```

2. **Crear un Nuevo Proyecto**:

   ```bash
   nest new nombre-proyecto
   ```

3. **Navegar al Directorio del Proyecto**:

   ```bash
   cd nombre-proyecto
   ```

4. **Iniciar el Servidor de Desarrollo**:
   ```bash
   npm run start
   ```

## Estructura del Proyecto

- `src/`: Contiene el código fuente del proyecto.
- `main.ts`: Punto de entrada de la aplicación.
- `app.module.ts`: Módulo raíz de la aplicación.

## Comandos Útiles

- **Generar un Módulo**:

  ```bash
  nest generate module nombre-modulo
  ```

- **Generar un Controlador**:

  ```bash
  nest generate controller nombre-controlador
  ```

- **Generar un Servicio**:
  ```bash
  nest generate service nombre-servicio
  ```

## Recursos Adicionales

- [Documentación Oficial de NestJS](https://docs.nestjs.com/)
- [Repositorio de GitHub de NestJS](https://github.com/nestjs/nest)
