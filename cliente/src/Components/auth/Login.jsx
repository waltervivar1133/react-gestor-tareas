import React , {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../Context/alertas/alertaContext';
import AuthContext from '../../Context/autenticacion/authContext';


const Login = () => {


  //extraer los valores del context

  const alertaContext = useContext(AlertaContext);
  const { alerta , mostrarAlerta } = alertaContext;


  const authContext = useContext(AuthContext);
  const {iniciarSesion, mensaje, autenticado} = authContext;
  //state para iniciar sesion

  const [usuario , guardarUsuario] = useState({
    email:'',
    password: ''
  })

  const {email, password} = usuario;

  const onChange = e =>{
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e =>{
    e.preventDefault();
      // validar que no haya cambios vacios
      if(email.trim() === '' || password.trim() === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
      }
      //psarlo en el action

      iniciarSesion({ email, password})
  }
  return ( 

   <div className="form-usuario">
     {
       alerta ? ( <div className= {`alerta ${alerta.categoria}`}> {alerta.msg}</div>) : null
     }
     <div className="contenedor-form sombra-dark">
       <h1>Iniciar Sesion</h1>

       <form
        onSubmit={onSubmit}>
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
            <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesion"/></div> 
       </form>
       <Link to={'/nueva-cuenta'} className="enlace-cuenta btn o btn-block"><center>Obtener cuenta </center></Link>
     </div>
   </div>
   );
}
 
export default Login;