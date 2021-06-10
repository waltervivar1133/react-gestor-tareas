import { ACTUALIZAR_TAREA, AGREGAR_TAREA, ELIMINAR_TAREA, LIMPIAR_TAREA, TAREAS_PROYECTO, TAREA_ACTUAL, VALIDAR_TAREA } from "../../Types";

export default (state , action) => {

  switch(action.type){

    case TAREAS_PROYECTO : 

      return{
        ...state,
        tareasProyecto : action.payload
      }
    case AGREGAR_TAREA :

      return {
        ...state,
        tareasProyecto : [action.payload,...state.tareasProyecto],
        errorTarea : false
      }
    case  VALIDAR_TAREA : 

      return {
        ...state,
        errorTarea : true
      }

    case ELIMINAR_TAREA : 
        return {

          ...state,
          tareasProyecto : state.tareasProyecto.filter(tarea => tarea._id !== action.payload)
        }
    case ACTUALIZAR_TAREA : 
        
        return {

          ...state,
          tareasProyecto : state.tareasProyecto.map( tarea => tarea._id === action.payload._id ?  action.payload : tarea)
        }

    case TAREA_ACTUAL :
        
        return {

          ...state,
          tareaSeleccionada : action.payload
        }
    case LIMPIAR_TAREA : 
        return{

          ...state,
          tareaSeleccionada : null
        }
    default :

      return state;
  }

  
}