import React, { useContext, useEffect, useState } from 'react';
import proyectoContext from '../../Context/proyectos/proyectoContext';
import tareaContext from '../../Context/tareas/tareaContext';


const FormTarea = () => {

  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { tareaSeleccionada, errorTarea ,agregarTarea, validarTarea, obtenerTareas ,actualizarTarea ,limpiarTarea} = tareasContext;
  
  useEffect(() => {
      if(tareaSeleccionada !== null) {
        setTarea(tareaSeleccionada)
      }else {
        setTarea({
          nombre : ''
        })
      }
  }, [tareaSeleccionada])


  const [tarea, setTarea] = useState({
      nombre : '',

  })

  // si no hay proyecto
  if(!proyecto) return null;


  // sacamos el nombre del proyecto
  const { nombre } = tarea;

  // destructuring de proyecto Actual
  const [ proyectoActual ] = proyecto;

  // leer los valores 

  const handleChange = e => {
      setTarea( {
        ...tarea,
        [e.target.name] : e.target.value
      })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Validar
    if(nombre.trim() === '') {

      validarTarea();
      return;
    }

    if(tareaSeleccionada === null) {
      //agregar la nueva tarea del state de tareas
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea)

    }else {
      actualizarTarea(tarea);
      limpiarTarea()
    }


    // obtener y filtrar taras del proyecto actual

    obtenerTareas(proyectoActual.id)

     //reiniciar form

    setTarea({
      nombre: ''
    })
  }

  return (  
    <div className="formulario">
      <form 
        onSubmit={ handleSubmit }
      >
        <div className="contenedor-input">
          <input type="text"
          className="input-text"
          placeholder="tarea"
          name="nombre"
          value={nombre}
          onChange= { handleChange }/>
        </div>
        <div className="contenedor-input">
          <input type="submit"
          className="btn btn-primario btn-submit btn-block"
          value={ tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
          />
        </div>
      </form>
      {
        errorTarea ? <p className="mensaje error">El nombre de la tarea es obligatrio</p> : null  
      }
    </div>
  );
}
 
export default FormTarea;