import React , {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../Context/alertas/alertaContext';
import AuthContext from '../../Context/autenticacion/authContext'; 
const NuevaCuenta = (props) => {

  const userDatos = {
    nombre : 'Walter',
    correo : 'walter@correo.com',
    
  }
  //extraer los valores del context

    const alertaContext = useContext(AlertaContext);
    const { alerta , mostrarAlerta } = alertaContext;


    const authContext = useContext(AuthContext);
    const {registrarUsuario, mensaje, autenticado} = authContext;


  // en caso que se haya auntenticado

    useEffect(() => {

      if(autenticado) {
        props.history.push('/proyectos')
      }

      if( mensaje ){
        mostrarAlerta( mensaje.msg , mensaje.categoria)
      }
    }, [mensaje, autenticado, props.history ])
  //state para iniciar sesion
  
  const [usuario , guardarUsuario] = useState({

    email:'',
    password: '',
    nombre : '',
    confirmar: ''
  })

  const {email, password, nombre , confirmar} = usuario;

  const onChange = e =>{
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e =>{
    e.preventDefault();
      // validar que no haya cambios vacios

      if(nombre.trim() === '' || password.trim() === '' || nombre.trim() === '' || confirmar.trim() === ''){
        mostrarAlerta('Todos los campos son obligatrorios', 'alerta-error')
      }

      //password minimo de 6 contraseñas

      if(password.length < 6 ) {
        mostrarAlerta('El password debe ser de almenos son 6 caracteres', 'alerta-error')
        return;
      }
      
      //los dos 2 password indenticos

      if(password !== confirmar) {
        mostrarAlerta('Los passwords no son iguales', 'alerta-error')
      }

      
      // pasarlo al action

      registrarUsuario({ nombre, email, password})

  }
  return ( 

   <div className="form-usuario">
     {
       alerta ? ( <div className= {`alerta ${alerta.categoria}`}> {alerta.msg}</div>) : null
     }
     <div className="contenedor-form sombra-dark">
       <h1>Obtener una Cuenta</h1>

       <form
        onSubmit={onSubmit}>
            <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={onChange} />   
         </div>
         <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input type="email"
                    id="email"
                    name="email"
                    placeholder="Tu email"
                    value={email}
                    onChange={onChange} />   
         </div>
         <div className="campo-form">
            <label htmlFor="password">password</label>
            <input type="password"
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Tu password"
                    onChange={onChange} />   
         </div>
         <div className="campo-form">
            <label htmlFor="confirmar">Confirmar password</label>
            <input type="password"
                    id="confirmar"
                    name="confirmar"
                    value={confirmar}
                    placeholder="Repite tu password"
                    onChange={onChange} />   
         </div>
          <div className="campo-form">
            <input type="submit" value ="Registrarme" className="btn btn-primario btn-block"/>
            </div> 
       </form>
       <Link to={'/'} className="enlace-cuenta btn o btn-block"><center>Tengo una cuenta </center></Link>
     </div>
   </div>
   );
}
 
export default NuevaCuenta;