import React , {useReducer} from 'react';
import uuid, { v4 as uuidv4 } from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO , OBTENER_PROYECTO , AGREGAR_PROYECTO } from '../../Types';



const ProyectoState = props =>{

  const proyectos = [
    { id : 1 ,nombre : 'tienda virtual'},
    {id : 2, nombre : 'intranet'},
    {id : 3 , nombre : 'Mern'}
  ]

  const initialState = {
    proyectos :[],
    formulario : false
  }

  // dispatch para ejecutar las acciones


    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // serie de funciones crud

    const mostrarFormulario = () => {
        dispatch({ 
          type: FORMULARIO_PROYECTO
        })
    }
    // obtener los proyectos de

    const obtenerProyectos = ()  => {
      dispatch({
        type: OBTENER_PROYECTO,
        payload: proyectos
      })
    }

    // agregar proyectos a 
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4();

          // insertar el proyecto en el state
          dispatch ({ 
            type : 'AGREGAR_PROYECTO',
            payload : proyecto
          })
    }
    return (

      <proyectoContext.Provider
        value={{
          proyectos: state.proyectos,
          formulario : state.formulario,
          mostrarFormulario,
          obtenerProyectos,
          agregarProyecto
        }}
      >

        {props.children}

      </proyectoContext.Provider>
    )

}

export default ProyectoState;