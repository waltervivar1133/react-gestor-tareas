import React, { useContext }  from 'react'
import Tarea from './Tarea'

import proyectoContext from '../../Context/proyectos/proyectoContext'
import tareaContext from '../../Context/tareas/tareaContext';
import { CSSTransition , TransitionGroup} from 'react-transition-group'

const ListadoTareas = () => {
  // context de proyecto
   const proyectosContext = useContext(proyectoContext);
   const { proyecto, eliminarProyecto } = proyectosContext
  
   // context de tarea  

   const tareasContext = useContext(tareaContext);
   const {tareasProyecto } = tareasContext

  
   // si no hay proyecto 

   if(!proyecto) return <h2>Selecciona un proyecto</h2>

   //array destructruring para extraer el proyecto actual ( proyecto)
    

      const [proyectoActual] = proyecto
    


  const handleEliminar = () => {

    eliminarProyecto(proyectoActual._id)
  }
  return ( 
    <>
        <h2>Proyecto :  { proyectoActual.nombre} </h2>
        <ul className="listado-tareas">
          {tareasProyecto.length=== 0
            ?
            (<li className="tarea"><p>No hay tarea</p></li>)
            : <TransitionGroup>
               { tareasProyecto.map((tarea) =>(
                 <CSSTransition
                  key={tarea.id}
                  timeout={200}
                  classNames="tarea"
                 >
                     <Tarea
                      tarea={tarea}
                      />
                 </CSSTransition>
                 ))}
            </TransitionGroup>
          }
         
        </ul>
        <button type="button"
         className="btn btn-eliminar"
         onClick={ handleEliminar}>Eliminar Proyecto &times;</button>
    </>
   );
}
 
export default ListadoTareas;