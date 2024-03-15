import { useState } from 'react'

//export const AddCategory = ({ setCategoriess }) => { // Primera manera de hacerlo
export const AddCategory = ({ onNewCategory }) => {

    /* Cada componente puede tener su propio estado, es decir, 
    puede tener sus propios hooks, sus propios useStates
    */
    const [inputValue, setinputValue] = useState('')

    const onInputChange = ( event ) => {
        //console.log(event.target.value);
        setinputValue(event.target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log(inputValue);

        // Task - setCategories (....... inputValue)

        /* El useState nos permite mandarle un callback en el cual aquí vamos a tener las categorías, es decir, todas las categorías anteriores (categorías en el estado actual)  se puede poner con paréntesis o sin paréntesis,*/
        //setCategoriess( (categories) => [inputValue,  ...categories]);

        if (inputValue.trim().length <= 1) return;

        //setCategoriess( (categories) => [inputValue,  ...categories]);
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

    return (

        /* <form onSubmit={ event => onSubmit(event)}>  tambien se puede resumi en <form onSubmit={ onSubmit }>   */
        <form onSubmit={ event => onSubmit(event)}> 
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange } // Agregamos el onChange debido al warning, ademas todos eventos JS cuantan con el event
            />  
        </form>


    )
}


/*
onChange={ (event) => onInputChange(event) } 
Si yo regreso al editor de código, tenemos un caso en el cual estoy mandando una función
cuyo primer argumento es el argumento que estoy mandándole a la función que quiero ejecutar.
Entonces puedo obviar ponerlo así.

Y únicamente mandar la referencia a esa función.
onChange={ onInputChange } 

*/

// Solucion de Warnings


/*Warning: You provided a `value` prop to a form field without an `onChange` handler.
This will render a read-only field. If the field should be mutable use `defaultValue`. 
Otherwise, set either `onChange` or `readOnly`.


*/















