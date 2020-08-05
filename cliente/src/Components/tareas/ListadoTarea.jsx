import React , {Fragment} from 'react'
import Tarea from './Tarea'

const ListadoTareas = () => {


  const tareasProyecto = [
    {nombre : 'elegir plataforma', estado : true},
    {nombre : 'elegir Colores', estado : false},
    {nombre : 'elegir plataforma de pago', estado : true},
    {nombre : 'elegir hosting', estado : false}


  ]
  return ( 
    <Fragment>
        <h2>Proyecto : Tienda Virtual</h2>
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
         className="btn btn-eliminar">Eliminar Proyecto &times;</button>
    </Fragment>
   );
}
 
export default ListadoTareas;