import React, { useContext, useState } from 'react'
import { data } from './data/data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [tramosHorarios, setTramosHorarios] = useState(data)
  const [recursosSeleccionados, setRecursosSeleccionados] = useState([])

  console.log(recursosSeleccionados)

  return (
    <AppContext.Provider
      value={{
        tramosHorarios,
        recursosSeleccionados,
        setRecursosSeleccionados,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
