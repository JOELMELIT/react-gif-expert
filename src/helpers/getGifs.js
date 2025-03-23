


export const getGifs = async ( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=dsd5ZRrW0aKmdmhD3pN6VZUhq1rDKIGG&q=${ category }&limit=10`; // &limit=20 Es un parametro que indica la cantidad de registros que queremos recuperar

    const resp = await fetch ( url );
    
    const { data = [] } = await resp.json(); // data = [], para asegurarnos que siempre exista un arreglo, aunque este vacia

    const gifs = data.map ( img => ({  // la sintaxis ({ significa que ya esta retornando un objeto
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url // Todos estos valores provienen del data de la API 
    }));

    //console.log(data);
    /* console.log(gifs);  En la consola se va a esta ejecutando 2 veces 
    ya que es una de ella es la verificacion de REACT en el modo Estricto <React.StrictMode>, en produccion no va a pasar*/

    return gifs;
}


























