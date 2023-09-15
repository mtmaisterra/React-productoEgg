import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FavImg from '../img/me-gusta.png';
import NoFavImg from '../img/corazon1.png';


export default function Producto({ 
  producto, 
  agregarAFavoritos, 
  eliminarDeFavoritos 
}) {
  const [favorito, setFavorito] = useState(false)

  function handleClick(){
    if (favorito) {
      eliminarDeFavoritos(producto);
      setFavorito(false);
  } else {
    agregarAFavoritos(producto);
      setFavorito(true);
  }
  }

  return (
    <div className="producto">
      <Link to={`/producto/${producto.id}`}><img src={producto.image} alt="" /></Link>
      <div className="info">
        <p>{producto.title}</p>
        <mark>Precio ${producto.price}</mark>
      </div>
      {   favorito ? (
          <img className='fav-icon' onClick={handleClick} src={NoFavImg} alt="" />
         )   : (
          <img className='fav-icon' onClick={handleClick} src={FavImg} alt="" />
      )}

    </div>
  );
}
