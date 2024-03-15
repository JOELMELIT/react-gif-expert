
import React, { useState } from 'react'
//import { AddCategory } from './components/AddCategory';
//import { GifGrid } from './components/GifGrid';
import { AddCategory, GifGrid } from './components'; // Archivo de Barril - Toma las referencias del index.js contenida en la carpeta components


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory ) => {

        if(categories.includes(newCategory)){
            return;
        }

        console.log(newCategory);
        setCategories([newCategory, ...categories]);

    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = { (value) => onAddCategory(value)}
            />
            { 
                categories.map( category =>
                    (
                        <GifGrid 
                            key={ category } 
                            categoryy={ category }
                        />
                    )
                ) 
            }   
        </>
    )
}




//////  CODIGO DE PRUEBAS INICIALES ///////

/*
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // No se recomienda poner el Hook dentro de una conficional 'if' ya que React perderia la referencia del state
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball Z' ]);

    const onAddCategory = ( newCategory ) => {

        if(categories.includes(newCategory)){
            return;
        }

        // La forma en que lo realice
        //const newCategory = ['Videojuegos'];
        //const addingCategory = [...categories, newCategory]
        //setCategories( addingCategory );
        //categories.push('Videojuegos'); No usar el push ya que muta el arreglo, muta el estado

        // Otra forma de agregarlo e insertarlo al inicio
        //setCategories(['FreeFire', ...categories]);

        console.log(newCategory);
        setCategories([newCategory, ...categories]);

        // Otra forma de agregarlo
        //setCategories( cat => [...cat, 'Valorant']); // El callback que se puede enviar a la funcion del useState


    }

    return (
        <>
*/        
//            {/*  titulo */}
//           <h1>GifExpertApp</h1>

//            {/*  Input */}
//            <AddCategory 
                //setCategoriess={ setCategories } // Utilizando props
                
                // Utilizando una mejor forma de la propiedad
//                onNewCategory = { (value) => onAddCategory(value)}
            
//            />

//            {/* Listado de Gif */}
//            {/*<button onClick={ onAddCategory }>Agregar</button>  Codigo de pruebas iniciales*/}
            
/*            <ol>
                { 
                    categories.map( category =>
                        //return <li key={ category }>{ category }</li> // Codigo de pruebas iniciales
                        (
                            <div key={ category }>
                                <h3>{ category }</h3>
                                <li>{ category }</li>
                            </div>  Todo esto se puede sustituir por el componente de GifGrid

                            <GifGrid 
                                key={ category } 
                                categoryy={ category }
                            />
                        )
                    ) 
                } la llave al inicio de categories indica que se utilizara un expression de JS 

            </ol>
*/            
//                {/* Gif Item */}


//        </>
//    )
//}




/* 

ol - order list
:: marker - Lo crea React para saber que ese es el elmento



Respecto a categories.map, no es recomendable usar el indice del map para la key del <li 
Porque React utiliza este este valor de la llave para saber cuando un elemento se eliminó.
Si nosotros por ejemplo borramos la posicion 0 de la lista, siempre sigue existiendo la posición 0 en nuestro arreglo, por lo cual podría cometer un error y eliminar visualmente del arreglo de elementos.
Y podríamos tener una una información que no es la que nosotros estamos esperando.

*/










