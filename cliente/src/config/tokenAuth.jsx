
import clientesAxios from "./axios";


export const tokenAuth = token => {

  if(token) {
    
    clientesAxios.defaults.headers.common['x-auth-token'] = token;
  
  }else {

    delete clientesAxios.defaults.headers.common['x-auth-token'];
  }

}
