

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


// Un hook no es mas que una funcion que retorna algo...
export const useFetchGifs = (categoryy) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getImages = async () =>{
        const newImages = await getGifs( categoryy );
        setImages(newImages)
        setIsLoading(false);  // Gracias a React 18, SetImages y setIsLoading no lanzan las 2 renderizaciones, solo 1
    }


    // Se puede disparar un  efecto secundario en cualquier punto del functional component
    // El useEffect no puede usar el async - useEffect tiene que regresar una funcion, y el async regresa una promesa 
    useEffect(() => {
        getImages();
    }, [ ]) // En los corchetes va el arreglo de dependencias, que si se deja vacio [ ] significa que el hook se va a disparar la primera vez que se crea y se ejecuta el componente
    
    return {
        images,
        isLoading
    }


}





















