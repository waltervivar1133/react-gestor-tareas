
import React, { useContext } from 'react';
import proyectoContext from '../../Context/proyectos/proyectoContext';
import tareaContext from '../../Context/tareas/tareaContext';

const Tarea = ({tarea}) => {

  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { eliminarTarea , obtenerTareas, actualizarTarea , guardarTareaActual} = tareasContext;

  const [ proyectoActual ] = proyecto;


  // funcion cuando da click a eliminar 

  const tareaEliminar = id => {
    eliminarTarea(id, proyectoActual._id);
    obtenerTareas(proyectoActual._id);
  }

  // cambiar estado

  const cambiarEstado = tarea => {
 
    if (tarea.estado) {
      tarea.estado = false;
    }else {
      tarea.estado = true;
    }
    actualizarTarea(tarea);
  }

  // agregar tarea actual para poder editarla

  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea)
  }

  if(!tarea) return <p>Cargando...</p>
  return ( 

    <li className="tarea sombra">

      <p>{tarea.nombre}</p>

      <div className="estado">
          {tarea.estado ?
            (
              <button  type="button"
              className="completo"
              onClick={()=> cambiarEstado(tarea)} >Completo</button>

            )
            : 
            (
              <button  type="button"
              className="incompleto"
              onClick={()=> cambiarEstado(tarea)} >Incompleto</button>

            )
          }
      </div>
      <div className="acciones">
          <button type="button"
          className="btn btn-primario"
          onClick={ () => seleccionarTarea(tarea) }>
            editar
          </button>
          <button type="button"
          className="btn btn-danger"
          onClick={() => tareaEliminar(tarea._id)}>
            eliminar
          </button>
      </div>
    </li>


  );
}
 
export default Tarea;