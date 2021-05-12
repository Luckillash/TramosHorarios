import './index.css'
import Navbar from './componentes/navbar'
import { useGlobalContext } from './context'

import './index.css'

function App() {
  const {
    tramosHorarios,
    recursosSeleccionados,
    setRecursosSeleccionados,
  } = useGlobalContext()

  const recursoElegido = (recursoSolicitado) => {
    const incluyeRecursoSolicitado = recursosSeleccionados.includes(
      recursoSolicitado
    )
    if (recursosSeleccionados.length <= 8 && !incluyeRecursoSolicitado) {
      setRecursosSeleccionados([...recursosSeleccionados, recursoSolicitado])
    }
    if (recursosSeleccionados.length === 8) {
      setRecursosSeleccionados([...recursosSeleccionados])
    }
    if (incluyeRecursoSolicitado) {
      const eliminarRecurso = recursosSeleccionados.filter(
        (recurso) => recurso !== recursoSolicitado
      )
      setRecursosSeleccionados([...eliminarRecurso])
    }
  }

  return (
    <main>
      <Navbar />
      <div className='app'>
        <div className='container'>
          {tramosHorarios.map((tramoHorario, index) => {
            const recurso = [tramoHorario]
            // SE filtra CADA recurso Y SE PASA SU VALOR COMO recursoEspecifico, EN LA FUNCIÓN SE BUSCA SI recursosSeleccionados INCLUYE ESTE recursoEspecifico EN SU ARRAY. SI recursoEspecífico FORMA PARTE DE recursosSeleccionados, ESTE recursoEspecifico FORMARÁ PARTE DEL NUEVO ARRAY DE recurso.
            const buscarRecurso = recurso.filter((recursoEspecifico) =>
              recursosSeleccionados.includes(recursoEspecifico)
            )
            return (
              <div
                className={` box ${
                  // SE TRANSFORMAN EN STRINGS PARA PODER SER COMPARADOS.
                  buscarRecurso.join(',') === recurso.join(',')
                    ? 'box-activated'
                    : recursosSeleccionados.length > 7
                    ? 'box-limit'
                    : null
                }`}
                key={index}
                onClick={() => {
                  recursoElegido(tramoHorario)
                }}
              >
                <p>{tramoHorario}</p>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default App
