# TP Final DAM Sistema de Riego

 [Angular CLI](https://github.com/angular/angular-cli) versión 12.1.0.

## Development server

/sistema-riego-app Run `ng serve` , `http://localhost:4200/`. .


## Build
***
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Descripción de estructura de directorios
***

En el directorio *sistema-riego* , esta el proyecto angular en el que se empezó el desarrollo y en el que
esta basado el proyecto ionic *sistema-riego-app*

## *sistema-riego-app*
***
* app
1. contact
    * Módulo para campo de contactos del menú
2. core
    * Módulo para administrar servicios(get,post) y modelos(device)
3. demo
    * Módulo para agregar o quitar dispositivos
4. device
    * Módulo para describir un dispositivo, listarlo y ver detalles, apartir de device se genera una lista de devices y se selecciona la vista a detall(device-detail)
5. home
    * Home pantalla de inicio o bienvenida contiene el banner y estructura del home.
  
6. layaut
    *  administra los templates html
7. page-not-found
    *  Módulo para vista en caso de error de url
8. shared
    * Módulo para administrar componentes compartirdos como templates:
      * footer
      * header
    * directives y pipes
### Paquetes configurados con ionic capacitor
* android
* ios
***
## Consideraciones
***
> Las consultas fueron probadas con un servicio gratuito donde se almacenó paquetes json.
> el url_api esta ocnfigurado en enviroments.ts 
> https://612cc880ab461c00178b5eb6.mockapi.io/devices/devices.

