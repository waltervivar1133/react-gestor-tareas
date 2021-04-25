import React, { useReducer } from 'react'
import TareasContext from './tareaContext'
import TareaReducer from './tareaReducer'

import { AGREGAR_TAREA, ELIMINAR_TAREA, TAREAS_PROYECTO , VALIDAR_TAREA } from '../../Types'

const TareaState = props => {

  
  const initialState = {

    tareas : [

      { id : 1 , nombre : 'elegir plataforma', estado : true, proyectoId : 1},
      { id : 2 , nombre : 'elegir Colores', estado : false,proyectoId : 2},
      { id : 3 , nombre : 'elegir plataforma de pago', estado : true, proyectoId : 3},
      { id : 4 , nombre : 'elegir hosting', estado : false, proyectoId : 4},
      { id : 5 , nombre : 'elegir plataforma', estado : true, proyectoId : 4},
      { id : 6 , nombre : 'elegir Colores', estado : false,proyectoId : 3},
      { id : 7 , nombre : 'elegir plataforma de pago', estado : true, proyectoId : 2},
      { id : 8 , nombre : 'elegir hosting', estado : false, proyectoId : 1}

    ],

    tareasProyecto : null,
    errorTarea : false
  
  }

  // crear dispatch y state

  const [state , dispatch] = useReducer(TareaReducer, initialState);

  // crear las funciones 



  // obtener las tareas de un proyecto
  
  const obtenerTareas = proyectoId => {

    dispatch({

      type : TAREAS_PROYECTO,
      payload : proyectoId
    })
  }
  // agregar tarea
  
  const agregarTarea = tareas => {

    dispatch({

      type : AGREGAR_TAREA,
      payload : tareas
    })
  }

  // Validar formulario 

  const validarTarea = () => {

    dispatch({
      type : VALIDAR_TAREA
    })

  }


  // eliminar tarea por su ID

  const eliminarTarea = id => {
    dispatch({
      type : ELIMINAR_TAREA,
      payload : id
    })
  }

  return (

    <TareasContext.Provider
      value = {{  
        tarea : state.tareas,
        tareasProyecto : state.tareasProyecto,
        errorTarea : state.errorTarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea
      }}
    >
      {props.children}
    </TareasContext.Provider>

  )

}

export default TareaState;
