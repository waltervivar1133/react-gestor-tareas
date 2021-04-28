import React, { useReducer } from 'react'
import TareasContext from './tareaContext'
import TareaReducer from './tareaReducer'
import { v4 as uuidv4 } from 'uuid';

import { ACTUALIZAR_TAREA, AGREGAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, LIMPIAR_TAREA, TAREAS_PROYECTO , TAREA_ACTUAL, VALIDAR_TAREA } from '../../Types'

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
    errorTarea : false ,
    tareaSeleccionada : null
  
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
  
  const agregarTarea = tarea => {
    tarea.id = uuidv4();
    dispatch({

      type : AGREGAR_TAREA,
      payload : tarea
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

  // cambia el estado de cada tarea

  const cambiarEstadoTarea = tarea => {
    dispatch({
      type : ESTADO_TAREA,
      payload : tarea
    })  
  }

  // definir funcion que extrae una tarea para edicion

  const guardarTareaActual = tarea => {
    dispatch({

      type : TAREA_ACTUAL,
      payload : tarea
    })
  }

  // Edita o modifica una tarea 
  
  const actualizarTarea = tarea => {
     dispatch({
       type : ACTUALIZAR_TAREA,
       payload : tarea
     })
  }


  // elimina la tarea seleccionada

  const limpiarTarea = () => {

    dispatch({

      type : LIMPIAR_TAREA
    })
  }
  return (

    <TareasContext.Provider
      value = {{  
        tarea : state.tareas,
        tareasProyecto : state.tareasProyecto,
        errorTarea : state.errorTarea,
        tareaSeleccionada : state.tareaSeleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea
      }}
    >
      {props.children}
    </TareasContext.Provider>

  )

}

export default TareaState;
