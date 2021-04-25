
import React, { useContext } from 'react';
import proyectoContext from '../../Context/proyectos/proyectoContext';
import tareaContext from '../../Context/tareas/tareaContext';

const Tarea = ({tarea}) => {

  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { eliminarTarea , obtenerTareas} = tareasContext;

  const [ proyectoActual ] = proyecto;


  // funcion cuando da click a eliminar 

  const tareaEliminar = id => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  }

  return ( 

    <li className="tarea sombra">

      <p>{tarea.nombre}</p>

      <div className="estado">
          {tarea.estado ?
            (
              <button  type="button"
              className="completo" >Completo</button>

            )
            : 
            (
              <button  type="button"
              className="incompleto" >Incompleto</button>

            )
          }
      </div>
      <div className="acciones">
          <button type="button"
          className="btn btn-primario">
            editar
          </button>
          <button type="button"
          className="btn btn-danger"
          onClick={() => tareaEliminar(tarea.id)}>
            eliminar
          </button>
      </div>
    </li>


  );
}
 
export default Tarea;