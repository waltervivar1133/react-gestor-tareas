import React , {useState} from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {

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

      //password minimo de 6 contraseñas


      
      //los dos 2 password indenticos


      
      // pasrlo al action


  }
  return ( 

   <div className="form-usuario">
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