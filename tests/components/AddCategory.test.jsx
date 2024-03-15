import { fireEvent, render,screen }  from '@testing-library/react';
import { AddCategory } from '../../src/components';


describe('Pruebas en <AddCategory />', () => { 

    test('debe cambiar el valor de la caja de texto', () => { 

        render( <AddCategory onNewCategory={ () =>{ } }/>)
        // screen.debug();

        /* Disparando el evento, teniendo primeramente la referencia del input*/
        const inputt = screen.getByRole('textbox');

        // Disparando evento onchange
        fireEvent.input( inputt, { target: {value:'Saitama'} } );

        expect( inputt.value ).toBe('Saitama');

        screen.debug();
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Saitama';

        //TODO: ???

        //Funcion especial jest - Simular
        // Para simular el uso de la funcion onNewCategory contenida en otro file que no nos interesa testear
        const onNewCategory = jest.fn();

        // Al usar el jest.fn reemplazamos         render( <AddCategory onNewCategory={ () =>{ } }/>)   por
        render( <AddCategory onNewCategory={ onNewCategory }/>)

        const inputt = screen.getByRole('textbox');

        // Primeramente no funcionara porque no encontrara el form ya que en nuestro componente AddCategory en el form tenemos que agregar aria-label="form"
        const form = screen.getByRole('form');

        // Disparando evento onchange
        fireEvent.input( inputt, { target: {value: inputValue} } );

        // Disparando evento submit
        fireEvent.submit( form );

        // Evaluar que el input este vacio
        expect( inputt.value ).toBe('');

        // Evaluar que onNewCategory(inputValue.trim()); haya sido llamado con el valor que tenia la caja de texto 'textbox'
        expect( onNewCategory ).toHaveBeenCalled();

        // Evaluando que la funcion onNewCategory haya sido llamado 1 vez
        expect( onNewCategory ).toHaveBeenCalledTimes(1);

        // Evaluando que la funcion onNewCategory haya sido llamado con el valor del inputValue
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);

        screen.debug();
    })

    test('no debe llamar el onNewCategory si el input esta vacio', () => { 

        //Funcion especial jest - Simular
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>)

        const form = screen.getByRole('form');

        // Disparando evento submit
        fireEvent.submit( form );

        // Evaluando que la funcion onNewCategory no haya sido llamado
        expect( onNewCategory ).toHaveBeenCalledTimes(0);

        expect( onNewCategory ).not.toHaveBeenCalled();
    })

});


