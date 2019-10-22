import React from 'react';
import CrearProducto from './componentesBackend/CrearProducto';
import Productos from './componentesBackend/Productos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';




function App() {
  return (
    <div className="App">
       
    <BrowserRouter>
    <Navbar/>
     <Switch>
     <Route path="/" component={Home} exact />
     <Route path="/nuevoproducto" component={CrearProducto} exact />
     <Route path="/productos" component={Productos} exact />
     
     </Switch>
     </BrowserRouter>
  </div>
  );
}

export default App;
