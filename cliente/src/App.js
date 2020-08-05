import React from 'react';
import Login  from './Components/auth/Login'
import NuevaCuenta from './Components/auth/NuevaCuenta'
import Proyectos from './Components/proyectos/Proyectos'
import {BrowserRouter as Router , Switch, Route  } from 'react-router-dom';
import ProyectoState from './Context/proyectos/proyectoState';

function App() {
  return (
    <ProyectoState>
      <Router>
            <Switch>
              <Route  exact path="/" component={Login}/>
              <Route  exact path="/nueva-cuenta" component={NuevaCuenta}/>
              <Route  exact path="/proyectos" component={Proyectos}/>
            </Switch>
          </Router>
    </ProyectoState>
   
  );
}

export default App;
