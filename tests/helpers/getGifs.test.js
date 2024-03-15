
import { getGifs }  from '../../src/helpers/getGifs'


describe('Pruebas en getGifs()', () => { 

    test('test: debe retornar un arreglo de gifs', async () => { 

        const gifs =  await getGifs('One Punch');

        console.log(gifs);
        
        expect( getGifs.length ).toBeGreaterThan(0);

        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });

       // console.log(gifs[0].url).to;
        expect( gifs[0].url ).toContain('https://');
     })

});