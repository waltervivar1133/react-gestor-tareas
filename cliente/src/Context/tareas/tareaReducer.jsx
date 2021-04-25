import { AGREGAR_TAREA, ELIMINAR_TAREA, TAREAS_PROYECTO, VALIDAR_TAREA } from "../../Types";

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
    default :

      return state;
  }

  
}