import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../img/icon.png'

export default function Header() {
  return (
    <header className='header'>
    <Link className='icon' to={'/'}><img src={logoImg} alt="" /> </Link>
      <nav>
        <Link to={'/'}>Productos</Link>
        <Link to={'/favoritos'}>Favoritos</Link>
      </nav>
    </header>
  )
}


