import React, { useContext, useEffect } from 'react';
import AuthContext from '../../Context/autenticacion/authContext';

const Barra = () => {

  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado , cerrarSesion} = authContext;

  useEffect(() => {
    usuarioAutenticado();

    // eslint-disable-next-line
  }, [])

  return ( 
    <header className="app-header">
     { usuario ? <p className="nombre-usuario">Hola <span>
      
      </span>{usuario.nombre}</p>   : null }
      <nav className="nav-principal">
        <button className="btn btn-blank cerrar-sesion"
          onClick={ () => cerrarSesion()}
        >Cerrar Sesion</button>
      </nav>
    </header>
   );
}
 
export default Barra;