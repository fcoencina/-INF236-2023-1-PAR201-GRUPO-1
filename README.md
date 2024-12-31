# Grupo 1

Este es el repositorio del *Grupo 1*, cuyos integrantes son:

* Francisco Encina Aballay - 202030536-6
* Nicolás Robles Martínez - 202030546-3
* Matías Torres Velazquez - 202030537-4
* Profesor: **Alexis Henriquez**
* Ayudante: **Maciel Ripetti**

## Wiki
* [Enlace al Diagrama de contexto](https://github.com/fcoencina/INF236-2023-1-PAR201-GRUPO-1/wiki/Diagrama-de-Contexto)
* [Enlace al Modelo de Dominio](https://github.com/fcoencina/INF236-2023-1-PAR201-GRUPO-1/wiki/Modelo-de-Dominio)
* [Enlace a los Diagramas de Secuencia](https://github.com/fcoencina/INF236-2023-1-PAR201-GRUPO-1/wiki/Diagramas-de-Secuencia)
* [Enlace a Wiki de Entrega 4](https://github.com/fcoencina/INF236-2023-1-PAR201-GRUPO-1/wiki/Entrega-4)
* [Enlace a Wiki de Entrega 5](https://github.com/fcoencina/INF236-2023-1-PAR201-GRUPO-1/wiki/Entrega-5)
* [Enlace a Wiki de Entrega 6 y 7](https://github.com/fcoencina/INF236-2023-1-PAR201-GRUPO-1/wiki/Entrega-6-y-7)
* [Enlace Wiki](https://github.com/fcoencina/INF236-2023-1-PAR201-GRUPO-1/wiki)

## Videos

* [Video Presentación Entrega 1](https://youtu.be/n5oyO6FyPAQ)
* [Video Presentación Entrega 4](https://youtu.be/cCnYCzlATi8)
* [Video Presentación Entrega 6 y 7](https://youtu.be/jfly20QKkaU)

## Objetivos

1. Implementar un sistema de registro electrónico de la información de los pacientes, que permita una gestión  
más efectiva de los datos y una mejor coordinación entre los distintos profesionales de la salud que  
participan en el proceso de atención.

2. Reducir la carga administrativa de los profesionales de la salud, mediante la automatización de tareas  
repetitivas y la simplificación de los procesos de registro y gestión de la información.

3. Mejorar la seguridad de los pacientes mediante la implementación de un sistema de alerta temprana para  
posibles reacciones alérgicas a medicamentos y la gestión adecuada de los casos en que se presenten  
dichas reacciones.

## Criterios de éxito

1. Funcionalidad: El software debe cumplir con los requisitos y especificaciones establecidos y funcionar  
según lo previsto.

2. Fiabilidad: El software debe ser confiable y no debe fallar o presentar errores.  

3. Usabilidad: El software debe ser fácil de usar y entender para el usuario final.

4. Mantenibilidad: El software debe ser fácil de mantener y actualizar en el futuro.

## Actores relevantes

1. Paciente.

2. Auxiliar.

3. Tens.

4. Enfermera.

5. Médico.

## Historias de usuario

### Historia 1
Como personal del servicio de urgencias, quiero poder registrar los datos personales del paciente en una ficha de atención electrónica, para que el proceso de atención sea más rápido y eficiente.

#### Criterios de aceptación
1. Dado que la ficha de atención se escribe a mano y ha generado confusiones en los pacientes, cuando se implementen las fichas electrónica debe permitir la entrada de datos personales, como nombre, apellido, fecha de nacimiento, número de teléfono, dirección, entre otros.

2. Dado que la letra del personal de urgencias puede causar confusión cuando la ficha de atención electrónica se implemente, entonces será fácil de usar para los pacientes tener conocimiento de las recetas, diagnostocios y demás.

3. Dado que hoy se almacenan todas las fichas en papel, cuando se implemente el sistema de ingreso entonces los datos ingresados por el usuario deben ser almacenados de manera segura y confidencial.

### Historia 2
Como usuario del servicio de urgencia de salud pública (SAPU), quiero que los médicos puedan registrar la anamnesis y los exámenes que se deben realizar electrónicamente, para que la atención sea más eficiente.

#### Criterios de aceptación
1. Dado que al paciente expone su situación de salud, cuando el medico registre la anamnesis entonces debe permitir el registro de esta y de los exámenes que se deben realizar en la ficha de atención electrónica.

2. Dado la alta cantidad de pacientes atendidos por los médicos cuando estos quieran registrar los datos en la ficha de atención electrónica entonces el sistema deberá ser fácil de usar para ellos.

3. Dado que los datos ingresados en las fichas manuales no permiten enterarnos de datos de los pacientes cuando las fichas de atención electrónica se almacenen de manera segura y confidencial, entonces podremos tener datos de atenciones previas de los pacientes.

### Historia 3
Como usuario del servicio de urgencia de salud pública (SAPU), quiero que los medicamentos que me receten sean registrados electrónicamente y que se me entregue una copia de la ficha de atención clínica, para que la atención sea más eficiente.

#### Criterios de aceptación
1. Dado que al paciente se le receten medicamentos cuando este reciba su ficha de atención electrónica entonces tendrá el registro de los medicamentos recetados por el médico.

2. Dado que el personal de urgencias tome los datos del paciente, cuando deban ingresar los datos al sistema entonces se encontrarán con un sistema amigable y fácil de usar

3. Dado que ha finalizado la atención del paciente, cuando este se retire entonces deberá recibir una copia de la ficha de atención clínica que incluya la información de los medicamentos recetados.

## Instrucciones de Ejecución de la Aplicación

`Para ejecutar la aplicación correctamente es necesario tener instalado previamente Node.js junto con su gestor de paquetes(npm).`

1. Descargar desde el repositorio https://github.com/fcoencina/Sistema-Ingreso-Pacientes el proyecto en formato .zip.

2. Descomprimir la carpeta INF236-2023-1-PAR201-Grupo-1-main.zip.

3. Una vez descomprimida la carpeta, abrir una instancia de alguna terminal o consola del sistema y ejecutar los siguientes comandos: 

```
$ cd ~/INF236-2023-1-PAR201-GRUPO-1-main/server
$ npm install
$ npm start
```

4. Abrir otra instacia de terminal o consola y ejecutar los siguientes comandos:
```
$ cd ~/INF236-2023-1PAR-201-GRUPO-1-main/client
$ npm install
$ npm start
```
5. Una vez ejecutados estos comandos la aplicación de ingreso de pacientes se ejecutará en el navegador web del PC.

## Instrucciones de Uso de la Aplicación

`Como se mencionó antes la aplicación de ejecutará en el navegador web.`

* En la parte superior de la pantalla hay un menú el cual tiene las siguientes pestañas de la aplicación:

1. Inicio: En esta pestaña es posible ver los pacientes más recientes ingresados al sistema.

2. Buscar Paciente: En esta pestaña es posible buscar pacientes a través del nombre.

3. Ingresar Paciente: Esta pestaña sirve para ingresar pacientes al sistema.

* En las primeras dos pestañas se mostrarán los distintos pacientes que ya están en el sistema, en la parte derecha de la pantalla hay un botón de color azul el cual dice "acción", este botón desplegará cuatro distintas opciones:

1. Editar Info: Este botón sirve para editar la información con la que se ingresó al paciente.

2. Triage: Este botón sirve para anotar los datos que se obtienen en la Triage que se le realiza al paciente una vez ingresado.

3. Anamnesis: Este botón sirve para anotar los datos de la anamnesis del paciente, en este lugar se anotan datos como exámenes o medicamentos indicados.

4. Ver Ficha: Este botón sirve para generar la ficha del paciente en formato PDF.
