import React , {Fragment, useState, useContext} from 'react';
import proyectoContext from '../../Context/proyectos/proyectoContext';

const NuevoProyecto = () => {


  // obtener el state del formulario 

  const proyectoState = useContext(proyectoContext);
  const {formulario , mostrarFormulario , agregarProyecto} = proyectoState;

  // state para proyecto

  const [proyecto, guardarProyecto] = useState({
    nombre : '',
  });

  const {nombre }= proyecto;

// lee los contenidos de input

  const onChangeProyecto = e =>{
    guardarProyecto({
      ...proyecto,
      [e.target.name] : e.target.value
    })

  }

// cuando el usuario envia el proyecto
  const onSubmitProyecto = e =>{
    e.preventDefault();

    // validar el proyecto
    if(nombre === '') {
      return;
    }
    // agregar state
    agregarProyecto(proyecto)
    // reiniciar el form
    guardarProyecto({
      nombre : ''
    })
  }

  // mostrar el formulario de
    const onClickFormulario = () =>{
      mostrarFormulario();
    }
  return ( 
    <Fragment>
    <button
      type="button"
      className="btn btn-block btn-primario"
      onClick={ onClickFormulario } >
      Nuevo proyecto
    </button>

  {

    formulario 
    ? 
    (
      <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}
      >
      <input type="text"
      className="input-text"
      placeholder="Nombre del proyecto"
      name ="nombre"
      value={nombre}
      onChange={onChangeProyecto}/>
      <input type="submit"
      className="btn btn-primario btn-block"
      value="Agregar Proyecto"/>
    </form>
    ): null

  }
    </Fragment>
   );
}
 
export default NuevoProyecto;