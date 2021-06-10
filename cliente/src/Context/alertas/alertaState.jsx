import React, { useReducer } from 'react';
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../Types';
import alertaContext from './alertaContext';
import alertaReducer from './alertaReducer';


const AlertaState = props => {
  const initialState = {
    alerta: null
  }

  const [ state, dispatch ] = useReducer( alertaReducer, initialState);

  // funciones

  const mostrarAlerta = (msg, categoria) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        msg,
        categoria
      }
    });

    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA
      })
 
    }, 10000);
  }
  return (
    <alertaContext.Provider
      value = {{
        alerta: state.alerta,
        mostrarAlerta
       }}
    >
      {props.children}
    </alertaContext.Provider>
  )
}

export default AlertaState;



