import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../css/crearproducto.scss';
import '../css/main';
import Productos from './Productos';

class CrearProducto extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const nombre = this.getNombre.value;
        const descripcion =  this.getDescripcion.value;
        const data = {
          id: new Date(),
          nombre,
          descripcion,
          editar:false
        }
        this.props.dispatch({
            type:'ADD_PRODUCTO',
            data});
          this.getNombre.value = '';
          this.getDescripcion.value = '';
      
    }
      goTO =() =>  {
        const { history } = this.props;
        return this.context.history.push('/productos')
      }
render() {
return (
<div className="producto-container">
  <h1 className="titulo">Crear Producto</h1>
  <form className="form" onSubmit={this.handleSubmit} >
  {/* <input name="file-input" id="file-input" type="file" />
   <br />
   <img id="imgSalida" width="50%" height="50%" src="" /> */}
   <input required type="text" ref={(input) => this.getNombre = input}
   placeholder="Nombre" /><br /><br />
   <textarea required rows="5" ref={(input) => this.getDescripcion = input}
   cols="24" placeholder="Descripcion" /><br /><br />
   <button className="publicar" onClick={() => this.props.history.push('/productos')} >Publicar</button>
   
  </form>
  
</div>
);
}
}
export default connect()(CrearProducto);
