import { ACTUALIZAR_TAREA, AGREGAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, LIMPIAR_TAREA, TAREAS_PROYECTO, TAREA_ACTUAL, VALIDAR_TAREA } from "../../Types";

export default (state , action) => {

  switch(action.type){

    case TAREAS_PROYECTO : 

      return{
        ...state,
        tareasProyecto : state.tareas.filter( tarea => tarea.proyectoId === action.payload ),
        errorTarea : false
      }
    case AGREGAR_TAREA :

      return {
        ...state,
        tareas : [action.payload,...state.tareas],
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
          tareas : state.tareas.filter(tarea => tarea.id !== action.payload)
        }
    case ACTUALIZAR_TAREA :
    case ESTADO_TAREA : 
        
        return {

          ...state,
          tareas : state.tareas.map( tarea => tarea.id === action.payload.id ?  action.payload : tarea)
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