import React from 'react';
import Login  from './Components/auth/Login'
import NuevaCuenta from './Components/auth/NuevaCuenta'
import Proyectos from './Components/proyectos/Proyectos'
import {BrowserRouter as Router , Switch, Route  } from 'react-router-dom';


import ProyectoState from './Context/proyectos/proyectoState';
import TareaState from './Context/tareas/tareaState';
import AlertaState from './Context/alertas/alertaState'; 
import AuthState from './Context/autenticacion/authState';

function App() {

  return (
    
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
                <Switch>
                  <Route  exact path="/" component={Login}/>
                  <Route  exact path="/nueva-cuenta" component={NuevaCuenta}/>
                  <Route  exact path="/proyectos" component={Proyectos}/>
                </Switch>
            </Router>
          </AuthState>
         
        </AlertaState>
      </TareaState>
    </ProyectoState>
   
  );
}

export default App;
