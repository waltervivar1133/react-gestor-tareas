import React, { useContext }  from 'react'
import proyectoContext from '../../Context/proyectos/proyectoContext'
import Tarea from './Tarea'

const ListadoTareas = () => {
  
   const proyectosContext = useContext(proyectoContext);
   const { proyecto, eliminarProyecto } = proyectosContext

   // si no hay proyecto 

   if(!proyecto) return <h2>Selecciona un proyecto</h2>

   //array destructruring para extraer el proyecto actual ( proyecto)
    

      const [proyectoActual] = proyecto
    

  const tareasProyecto = [
    {nombre : 'elegir plataforma', estado : true},
    {nombre : 'elegir Colores', estado : false},
    {nombre : 'elegir plataforma de pago', estado : true},
    {nombre : 'elegir hosting', estado : false}


  ]

  const handleEliminar = () => {

    eliminarProyecto(proyectoActual.id)
  }
  return ( 
    <>
        <h2>Proyecto :  { proyectoActual.nombre} </h2>
        <ul className="listado-tareas">
          {tareasProyecto.length=== 0
            ?
            (<li className="tarea"><p>No hay tarea</p></li>)
            : tareasProyecto.map(tarea =>(
              <Tarea
              tarea={tarea}/>
            ))
          }
         
        </ul>
        <button type="button"
         className="btn btn-eliminar"
         onClick={ handleEliminar}>Eliminar Proyecto &times;</button>
    </>
   );
}
 
export default ListadoTareas;