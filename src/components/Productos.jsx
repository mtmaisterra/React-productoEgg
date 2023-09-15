import React /*{useEffect, useState }*/ from 'react'

import Producto from '../components/Producto'

export default function Productos({productos, agregarAFavoritos, eliminarDeFavoritos}) {

/*const {productos} = useState()*/

    return (
        <div className='productos'>
        {
            productos.length > 0 ? productos.map(producto =><Producto key={producto.id} producto={producto} 
            agregarAFavoritos={agregarAFavoritos} eliminarDeFavoritos={eliminarDeFavoritos} />)
       : <p>No hay productos en la lista</p>
        }        
        </div>
    )
}
