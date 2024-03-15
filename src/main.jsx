import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)



/*
ero qué es un Hook?
Los Hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes de función.
Los hooks no funcionan dentro de las clases — te permiten usar React sin clases. 

*/

/*
Con el lanzamiento de React 16.8, se introdujeron los hooks como una forma de permitir que los desarrolladores de React 
puedan reutilizar la lógica de estado y efectos secundarios sin necesidad de usar clases. Los hooks ofrecen una forma más 
sencilla y elegante de manejar el estado y los efectos secundarios en React.

La importancia de los hooks en React radica en que permiten a los desarrolladores escribir código más limpio y legible.
En lugar de tener que preocuparse por las complejidades de las clases y los componentes de orden superior, 
los hooks ofrecen una forma más intuitiva y fácil de manejar el estado y los efectos secundarios en los componentes de React.

Además, los hooks también permiten a los desarrolladores crear componentes más modulares y reutilizables, 
lo que hace que el código sea más escalable y fácil de mantener. Esto es especialmente importante para proyectos grandes 
y complejos en los que el mantenimiento del código es crucial para el éxito del proyecto.

En resumen, los hooks en React son una herramienta fundamental para el desarrollo web moderno. 
Proporcionan una forma más fácil y elegante de manejar el estado y los efectos secundarios en los componentes de React, 
lo que permite a los desarrolladores escribir código más limpio, modular y escalable. 
En los próximos puntos, profundizaremos más en lo que son los hooks en React y cómo se utilizan.


*/