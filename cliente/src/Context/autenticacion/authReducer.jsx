import { REGISTRO_EXITOSO, REGISTRO_ERROR, OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from "../../Types";


export default (state, action) => {

    switch (action.type) {
      case REGISTRO_EXITOSO:
          localStorage.setItem('token', action.payload.token)
          return {
            ...state,
            autenticado: true,
            mensaje: null
          }
      case REGISTRO_ERROR :
          localStorage.removeItem('token')
        return{
            ...state,
            token: null,
            mensaje: action.payload
        }
      case LOGIN_ERROR :
          return{
              ...state,
              token: null,
              mensaje: action.payload
          }
      case OBTENER_USUARIO : 
      
          return{
            ...state,
            usuario: action.payload
          }
      default:
        return state;
    }
 
}