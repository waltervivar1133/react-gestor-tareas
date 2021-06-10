import React, { useReducer } from 'react'
import TareasContext from './tareaContext'
import TareaReducer from './tareaReducer'
import clienteAxios from '../../config/axios';

import { ACTUALIZAR_TAREA, AGREGAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, LIMPIAR_TAREA, TAREAS_PROYECTO , TAREA_ACTUAL, VALIDAR_TAREA } from '../../Types'

const TareaState = props => {

  
  const initialState = {

    tareasProyecto : [],
    errorTarea : false ,
    tareaSeleccionada : null
  
  }

  // crear dispatch y state

  const [state , dispatch] = useReducer(TareaReducer, initialState);

  // crear las funciones 



  // obtener las tareas de un proyecto
  
  const obtenerTareas = async proyecto => {
    try {

      const resultado = await clienteAxios.get('/api/tareas', { params : { proyecto }})
      console.log(resultado);
    dispatch({

      type : TAREAS_PROYECTO,
      payload: resultado.data.tareas
    })
    } catch (error) {
      
    }
  }
  // agregar tarea
  
  const agregarTarea = async tarea => {

   try {
      const resultado = await clienteAxios.post('/api/tareas', tarea)
     
    dispatch({

      type : AGREGAR_TAREA,
      payload : tarea
    })

   } catch (error) {
     
   }
  }

  // Validar formulario 

  const validarTarea = () => {

    dispatch({
      type : VALIDAR_TAREA
    })

  }


  // eliminar tarea por su ID

  const eliminarTarea = async (id, proyecto) => {
    
    try {

      await clienteAxios.delete(`/api/tareas/${id}`, {params : { proyecto}} )
      dispatch({
        type : ELIMINAR_TAREA,
        payload : id
      })
    } catch (error) {
      console.log(error);
    }
  }

 // Edita o modifica una tarea 
  
 const actualizarTarea = async tarea => {
  try {
    const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea)
    dispatch({
      type : ACTUALIZAR_TAREA,
      payload : resultado.data.tarea
    })
  } catch (error) {
    
  }
}

  // definir funcion que extrae una tarea para edicion

  const guardarTareaActual = tarea => {
    dispatch({

      type : TAREA_ACTUAL,
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
        tareasProyecto : state.tareasProyecto,
        errorTarea : state.errorTarea,
        tareaSeleccionada : state.tareaSeleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
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
