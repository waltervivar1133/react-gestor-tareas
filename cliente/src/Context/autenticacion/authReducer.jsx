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
      case CERRAR_SESION :
      case LOGIN_ERROR :
          localStorage.removeItem('token');
        return{
            ...state,
            token: null,
            usuario : null,
            autenticado: null,
            mensaje: action.payload,
            cargando: false
        }
      case OBTENER_USUARIO : 
      
          return{
            ...state,
            autenticado: true,
            usuario: action.payload,
            cargando: false

          }
      case LOGIN_EXITOSO :
        localStorage.setItem('token', action.payload.token)
          
          return {
            
            ...state,
            autenticado: true,
            mensaje: null
          
          }
      default:
        return state;
    }
 
}