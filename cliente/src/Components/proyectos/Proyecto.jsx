import React, { useContext } from 'react';
import proyectoContext from '../../Context/proyectos/proyectoContext';
import tareaContext from '../../Context/tareas/tareaContext';


const Proyecto = ({proyecto}) => {
  // obtener el state de proyectos

  const proyectosContext = useContext(proyectoContext)
  const { proyectoActual } = proyectosContext;


// otener el state de tareas

const tareasContext = useContext(tareaContext);
const { obtenerTareas } = tareasContext
 //funcion para poder agregar el proyecto actual

 const seleccionarProyecto = id => {
   proyectoActual(id); // fijar un proyecto actual
   obtenerTareas(id); // filtrar las tareas
 }

  return ( 
    <li>
      <button
      type="button"
      className="btn btn-blank"
      onClick = { () => seleccionarProyecto(proyecto.id)}
      >{proyecto.nombre}
      
      </button>

    </li>
   );
}
 
export default Proyecto;