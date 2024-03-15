
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// Aqui le decimos que haga un mock completo del path '../../src/hooks/useFetchGifs'
jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => { 

    const category = 'SmartPhones';

    test('debe de mostrar el loading inicialmente', () => { 

        // Al usar el Mock de jest, se debe hacer la siguiente modificacion al test
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid  categoryy={ category }/>);

        //screen.debug();

        expect( screen.getByText('Cargando...'));

        expect( screen.getByText( category ));

    });

    test('debe mostrar items cuando se cargan las imagens en useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Iphone 14',
                url: 'https://localhost/iphone14.jpg'
            },
            {
                id: '123',
                title: 'Iphone 15',
                url: 'https://localhost/iphone15.jpg'
            },
        ];

        // Para simular el uso del hook se haria el uso de un custom mock
        // Antes de renderizar se haria el unso del Mock - linea 7
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid  categoryy={ category }/>);
        expect( screen.getAllByRole('img').length).toBe(2);

        expect(screen.getAllByRole('img')[0].alt).toBe('Iphone 14');
        expect(screen.getAllByRole('img')[1].alt).toBe('Iphone 15');
        expect(screen.getAllByRole('img')[2]).toBeUndefined();



        //screen.debug();


    });

});