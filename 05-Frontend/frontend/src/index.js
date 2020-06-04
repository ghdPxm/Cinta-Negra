import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CreateProduct from './components/CreateProduct';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />{/**Ruta a Home */}
        <Route path="/createProduct" exact component={CreateProduct} />{/**Ruta a Home */} */}
      </Switch> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

