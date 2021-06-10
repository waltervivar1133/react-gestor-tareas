import React , {useReducer} from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO , OBTENER_PROYECTO , AGREGAR_PROYECTO ,VALIDAR_FORMULARIO , PROYECTO_ACTUAL, ELIMINAR_PROYECTO, PROYECTO_ERROR} from '../../Types';
import clientesAxios from '../../config/axios';



const ProyectoState = props =>{


  const initialState = {
    proyectos :[],
    formulario : false,
    errorformulario : false,
    proyecto : null,
    mensaje: null
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

    const obtenerProyectos = async ()  => {
      try {

        const resultado = await clientesAxios.get('api/proyectos')
        dispatch({
          type: OBTENER_PROYECTO,
          payload: resultado.data.proyectos
        })
      } catch (error) {
        const alerta = {
          msg: 'Hubo un error',
          categoria: 'alerta-error'
        }
       dispatch({
          type: PROYECTO_ERROR,
           payload: alerta
        });
     }
    }

    // agregar proyectos a 
    const agregarProyecto = async proyecto => {
     
         try {

          const resultado = await clientesAxios.post('/api/proyectos', proyecto)
       
             // insertar el proyecto en el state
          dispatch ({ 
            type : AGREGAR_PROYECTO,
            payload : resultado.data
          })
         } catch (error) {
          const alerta = {
            msg: 'Hubo un error',
            categoria: 'alerta-error'
          }
         dispatch({
            type: PROYECTO_ERROR,
             payload: alerta
          });
       }
    }


    // validar formulario de
      const mostrarError = () =>{
        dispatch({
          type : VALIDAR_FORMULARIO
        })
      }

      // seleciona el proyecto que dio click

      const proyectoActual = proyectoId => {
        dispatch({
          type : PROYECTO_ACTUAL,
          payload: proyectoId
        })
      }

      // eliminar un proyecto 
      const eliminarProyecto = async proyectoId => {

        try {
         
          await clientesAxios.delete(`/api/proyectos/${proyectoId}`)
          dispatch({
            type : ELIMINAR_PROYECTO,
            payload : proyectoId 
          });

        } catch (error) {
           const alerta = {
             msg: 'Hubo un error',
             categoria: 'alerta-error'
           }
          dispatch({
             type: PROYECTO_ERROR,
              payload: alerta
           });
        }
      }

  
    return (

      <proyectoContext.Provider
        value={{
          proyectos: state.proyectos,
          formulario : state.formulario,   
          errorformulario : state.errorformulario,
          proyecto : state.proyecto,
          mensaje: state.mensaje,
          mostrarFormulario,
          obtenerProyectos,
          agregarProyecto, 
          mostrarError,
          proyectoActual,
          eliminarProyecto,

       
        }}
      >

        {props.children}

      </proyectoContext.Provider>
    )

}

export default ProyectoState;