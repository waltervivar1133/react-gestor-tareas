import {FORMULARIO_PROYECTO, OBTENER_PROYECTO,AGREGAR_PROYECTO} from '../../Types';


export default (state, action) => {
  switch (action.type) {

    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario : true
      }

      case OBTENER_PROYECTO:
        return {
          ...state,
          proyectos : action.payload
        }

      case AGREGAR_PROYECTO: 
        return {
          ...state,
            proyectos: [...state.proyectos, action.payload],
            formulario: false
        }
    default:
      return state;
  }
}