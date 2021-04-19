import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../Context/proyectos/proyectoContext';


const ListadoProyecto = () => {
  
 // obtener el state del state incial 

 const proyectoState = useContext(proyectoContext);
 const {proyectos, obtenerProyectos } = proyectoState;

 
useEffect(  () =>{
  obtenerProyectos();
},[])


  // revisar si proyecto tiene contenido 
 if(proyectos.length === 0) return <h3>No hay proyectos, comienza creando uno</h3>;

  return (

    <ul className="listado-proyectos">
      {proyectos.map(proyecto =>(
          <Proyecto
          key={proyecto.id}
          proyecto={proyecto}/>
      ))}
    
    </ul>
    );
}
 
export default ListadoProyecto;