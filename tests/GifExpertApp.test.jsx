
import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';




describe('Pruebas en el componente <GifExpertApp />', () => { 

    test('test: debe hacer match con el snapshot', () => { 

        render(<GifExpertApp />);
        const { container } = render(<GifExpertApp />);
        expect( container ).toMatchSnapshot();

    });

    const newCategory = 'smartphone';

    //Primero Debe agregar categorias nuevas:
    test('should Add new categories', () => {

        render(<GifExpertApp />);
        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); 

        //ahora disparo los eventos para agregar 3 categorias nuevas
        fireEvent.input(input, { target: { value: newCategory + ' 1'} });
        fireEvent.submit(form); //agrega smartphones

        fireEvent.input(input, { target: { value: newCategory + ' 2' } });
        fireEvent.submit(form); //agrega smartphones2

        fireEvent.input(input, { target: { value: newCategory + ' 3' } });
        fireEvent.submit(form);//agrega smartphones3
        screen.debug();
        //Espero que se hallan agregado 3 categorías cuyos nombres aparecen en etiquetas h3
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3);
    });


});