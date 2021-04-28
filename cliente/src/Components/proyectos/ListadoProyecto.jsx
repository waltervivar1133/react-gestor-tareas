import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../Context/proyectos/proyectoContext';
import { CSSTransition , TransitionGroup} from 'react-transition-group'


const ListadoProyecto = () => {
  
 // obtener el state del state incial 

 const proyectoState = useContext(proyectoContext);
 const {proyectos, obtenerProyectos } = proyectoState;

 
useEffect(  () =>{
  obtenerProyectos();

  // eslint-disable-next-line
},[])


  // revisar si proyecto tiene contenido 
 if(proyectos.length === 0) return <h3>No hay proyectos, comienza creando uno</h3>;

  return (

    <ul className="listado-proyectos">
      <TransitionGroup>
      {proyectos.map(proyecto =>(
        <CSSTransition
        key={proyecto.id}
        timeout={200}
        classNames="proyecto"
        >
          <Proyecto
         
          proyecto={proyecto}/>
        </CSSTransition>
          
      ))}
      </TransitionGroup>
    
    </ul>
    );
}
 
export default ListadoProyecto;