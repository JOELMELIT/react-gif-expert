
// Se puede escribir rafc + enter para crear la estrctura inicial del "const GifGrid"
// ({ category }) => {.....     -- category es el proptype

// Como buena practica, nunca se debe agregar la ejecucion de una funcion directamente en un functional component
// Porque cuando nuestra functional component se vulve a renderizar, en este ejecicio va a volver a ejecutar la peticion https


//import { useState,  useEffect} from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';

import PropTypes from 'prop-types';

export const GifGrid = ({ categoryy }) => {   // Esto es un functional component
    /*

    // Mantener un estado local dentro del GifGrid para mantener las imagenes, es preservado cuando se redibuja el componente
    const [images, setImages] = useState([]);

    //Esto dara un error ya que el useEffect espera el retorno de una función, al usar el async lo que se esta retornando es la respuesta de una Promesa
    //useEffect(() => {
    //    const newImages = await getGifs( categoryy );
    //    setImages(newImages);
    //}
    //}, [ ])



    const getImages = async () =>{
        const newImages = await getGifs( categoryy );
        setImages(newImages);
    }

    // Se puede disparar un  efecto secundario en cualquier punto del functional component
    // El useEffect no puede usar el async - useEffect tiene que regresar una funcion, y el async regresa una promesa 
    useEffect(() => {
        getImages();
    }, [ ]) // En los corchetes va el arreglo de dependencias, que si se deja vacio [ ] significa que el hook se va a disparar la primera vez que se crea y se ejecuta el componente
    
    */

    // Las lineas comentadas arriba se pueden agregar a un custom Hook
    const { images, isLoading } = useFetchGifs( categoryy );
    

    return (
            <>
            <h3>{ categoryy }</h3>

            {
                isLoading && (<h2>Cargando...</h2>)  // Muy parecido al condifional if
            }

            <div className="card-grid">
                {
                    /*images.map( (image) => {
                        return <li key={ image.id }>{ image.url }</li>
                    })
                    */

                    /* Acortando el codigo 
                    images.map( (image) => (
                        <li key={ image.id }>{ image.title }</li>
                    ))
                    */

                    /* Desestructurando image
                    images.map( ({id, title}) => (
                        <li key={ id }>{ title }</li>
                    ))
                    */

                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            //title={ image.title }
                            //url={image.url}
                            // Se puede esparcir todas las propiedades para que estando en el componente GifItem ya reciba todas las propiedades
                            { ...image}
                        />
                    ))
                    
                }                

            </div>
            
            </>
    )
}


/*

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)

*/


// Establecer los propTypes para el TESTEO EN JEST

GifGrid.propTypes = {
    categoryy: PropTypes.string.isRequired,
}













