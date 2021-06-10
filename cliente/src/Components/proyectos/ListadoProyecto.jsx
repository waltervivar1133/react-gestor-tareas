import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../Context/proyectos/proyectoContext';
import { CSSTransition , TransitionGroup} from 'react-transition-group';
import AlertaContext from '../../Context/alertas/alertaContext';

const ListadoProyecto = () => {
  
 // obtener el state del state incial 

 const proyectoState = useContext(proyectoContext);
 const {proyectos, obtenerProyectos , mensaje} = proyectoState;

 const alertaContext = useContext(AlertaContext);
 const { alerta, mostrarAlerta} = alertaContext;
 
 console.log(mensaje);
useEffect(  () =>{
  
  if(mensaje){
    mostrarAlerta(mensaje.msg , mensaje.categoria);
  }

  obtenerProyectos();

  // eslint-disable-next-line
},[mensaje])


  // revisar si proyecto tiene contenido 
 if(proyectos.length === 0) return <h3>No hay proyectos, comienza creando uno</h3>;

  return (

    <ul className="listado-proyectos">
      {
          alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>)  : null
      }
      <TransitionGroup>
      {proyectos.map(proyecto =>(
        <CSSTransition
        key={proyecto._id}
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