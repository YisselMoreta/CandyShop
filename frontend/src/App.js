import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import CrearProducto from './componentesBackend/CrearProducto';
import Productos from './componentesBackend/Productos';
import Producto from './componentesBackend/Producto';
import EditarProducto from './componentesBackend/EditarProducto';







function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
     <Switch>
     <Route path="/" component={Home} exact />
     <Route path="/productos" component={Productos} exact />
     
     <Route path="/nuevoproducto" component={CrearProducto} exact />
     <Route path="/editarproducto" component={EditarProducto} exact />
     </Switch>
    
     
     </BrowserRouter>
  </div>
  );
}

export default App;
