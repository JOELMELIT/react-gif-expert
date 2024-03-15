
import PropTypes from 'prop-types'

export const GifItem = ({ title, url }) => {


  return (
    
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>

  )
}

/** PARA TESTS - Lo primero que tengo que hacer si quiero evaluar los Proptypes cuando estamos en una aplicación vite no viene por defecto los Proptypes, asi que escribimos el comando       yarn add prop-types*/

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url  : PropTypes.string.isRequired,
}


/* TAREA.....
1. Añadir PropTypes ???? yarn add
  a. title obligatorio
  b. url obligatorio

2. Evaluar el snapshot
*/