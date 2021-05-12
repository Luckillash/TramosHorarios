import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const { recursosSeleccionados } = useGlobalContext()
  console.log(recursosSeleccionados)

  return (
    <nav className='navbar'>
      <div className='logo'>Tramos Horarios</div>
      <div className='aviso'>
        {recursosSeleccionados.length === 8
          ? 'Límite de repartidores seleccionados'
          : 8 - recursosSeleccionados.length + ' Repartidores libres'}
      </div>
    </nav>
  )
}

export default Navbar
