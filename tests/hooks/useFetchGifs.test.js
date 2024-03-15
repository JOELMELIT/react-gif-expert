

import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs'


describe('Pruebas en el Hook useFetchGifs', () => { 

    test('debe de regresar el estado incial', () => { 

        // No se puede usar los hooks de manera aislada como en la siguiente linea
        // const { images, isLoading } = useFetchGifs();
        // ya que los hooks usan parte del ciclo de vida de los componente de react, con lo que se tendria para ello, el utilizar renderHook

        const { result } = renderHook(() => useFetchGifs('SmartPhones') );

        // rerender - Re-renderizar el hook
        // result - Es el resultado que retornaria el hook cuando ya se monta
        // unmount - Es el resultado que se dispara cuando el hook es desmontado

        //console.log(result);
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async () => { 


        const { result } = renderHook(() => useFetchGifs('SmartPhones') );

        // waitFor - Esperar por algo
        // Con eso le estoy diciendo espera la prueba hasta que el resultado.current.images sea mayor a 0, espera a que suceda
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 1000 // Esto es un argumento que se pone para darle tiempo a que se cumpla el waitfor
            }
        );
        
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).not.toBeTruthy();
        expect( isLoading ).toBeFalsy();

    });
});