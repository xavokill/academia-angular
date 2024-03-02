# ACADEMIA - ANGULAR 101

Este repositorio está dedicado a comprender lo más básico y elemental de este lenguaje, de tal suerte que tengas un _quick start_ sobre los principales elementos de este lenguaje y logres visualizar su posible uso en diferentes casos de uso.

Ten en cuenta que todo el material depositado en este repositorio es un **_COMPLEMENTO_** y no un riguroso curso. Esto significa que los ejercicios están pensados para que complementes ese conocimiento que tú ya estás revisando en algún otro medio (un curso en línea, un libro, etc.).

Esta pequeña academia de Angular consisti´ra en un único proyecto que consforme se avance en los temas, este también irá creciendo progresimente. Se trata de una aplicación "Task List" a la cuál se le irán agregando nuevas funcionalidades e iremos refactorizando otras conforme avancemos en los temas

Te invito a que sigas cada uno de los ejercicios para que tengas mayor contexto de los temas y de sus soluciones conforme avanzas en tu estudio.

## TEMARIO

El siguiente minicurso contempla los siguientes temas, mismos que serán atendidos en un mismo o varios ejercicios :

* Introducción
* Instalación

  * Extensiones para VS Code.
* Ejercicios

## #1 - INTRODUCCIÓN

Angular es una plataforma de desarrollo (tambien conocida como *framework* de aplicación) construida sobre TypeScript la cual icluye los siguientes elementos:

* Un *component-based framework* (marco de trabajo basado en componentes) que permite construir aplicaciones web escalables.
* Una colección de librerías altamente integradas que cubren la gran mayoría de características utilizadas en un aplicativo web, tales como *Routing, forms, server side communications,* entre otros.
* Una comunidad de desarrolladores que estan detras de una de las mayores compañias de tecnologías hasta ahora, Google.
* Una amplia comunidad de usuarios (peronas o empresas) que utilizan Angular para sus aplicaciones.

Cuando creas aplicaciones con Angular, estás aprovechando una plataforma que puede escalar desde proyectos de un solo desarrollador hasta aplicaciones de nivel empresarial.

 Angular está diseñado para hacer que la actualización sea lo más fácil posible, para que puedas aprovechar los últimos desarrollos con un mínimo de esfuerzo. Lo mejor de todo es que el ecosistema de Angular está formado por un grupo diverso de más de 1,7 millones de desarrolladores, autores de bibliotecas y creadores de contenido.

## #2 - INSTALACIÓN

Tener un ambiente de desarrollo para Typescript implica tener instalado los siguientes componentes de software de manera obligatoria:

* [NodeJS](https://nodejs.org/en) - La versión LTS más reciente.

Se recomienda que se instalen los siguientes componentes de software de manera opcional _(o en su defecto alguno parecido)_:

* [Visual Studio Code](https://code.visualstudio.com/) - La versión más reciente.

Teniendo una vez ambos componentes de software instalados en tu pc, ejecuta los siguientes comandos para instalar de manera global TypeScript.

```bash
   foo@bar:~$ npm install -g @angular/cli
```

### #2.1 - EXTENSIONES PARA VS CODE

Las siguientes extensiones te pueden ser muy útiles para tus futuros desarrollos en TypeScript:

* [Angular Essentials (Version 16)](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials "Extencion Pack")

## 3 - EJERCICIOS

Como pudiste leer a inicio de este documento, iremos creciendo progresivamente una misma aplicación ("Task List") para incluir diversas problemáticas que nos permitirán revisar diversos temas.

A continuación se listan los ejercicios contemplados y un pequeño resumen de sus objetivos.

### # 3.1 - Introducción & Componentes

En este ejercicio se ejemplifica el uso de los comandos básicos de la interfaz de línea de comandos de Angular ([Angular CLI](https://angular.io/cli "Angualr CLI")).

El objetivo con el aplicativo es el siguiente:

* Generar un nuevo proyecto de angular y generar la interfaz de usuario necesaria para la lista de tareas (*UI only*).

Se deben cumplir los siguientes objetivos paritculares:

* Entender los comandos básicos de la línea de comandos de Angular.
* Generar un proyecto nuevo con la línea de comandos de Angular.
* Entender la estructura base de carpetas y archivos en un proyecto de Angular 16.
* Generar nuevos componentes a tarvés de la línea de comandos de Angular.
* Entender como se *renderean* los componentes.
* Dar un repaso a las pruebas uniratias.

### # 3.2 - Formularios

En este ejercicio se ejemplifica el uso de los formularios (reactivos) y su manejo a travéz TypeScript.

El objetivo con el aplicativo es el siguiente:

* Administrar un formulario a tarvés de las API que Angular expone y enviar esta información a otro componente (comunicación entre componentes).

Se deben cumplir los siguientes objetivos paritculares:

* Ligar un formulario HTML con su lógica asociada utilizando TypeScript.
* Entender el *data  binding* de un formulario (UI a TS / Ts a UI).
* Extraer datos de un formulario.
* Entender la comunicación de componentes
* Entender el uso de *services* para compartir datos entre distintos objetos.
