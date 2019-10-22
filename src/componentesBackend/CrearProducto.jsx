import React, { Component } from 'react';
import {connect} from 'react-redux';

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
render() {
return (
<div className="producto-container">
  <h1 className="titulo">Crear Producto</h1>
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" ref={(input) => this.getNombre = input}
   placeholder="Nombre" /><br /><br />
   <textarea required rows="5" ref={(input) => this.getDescripcion = input}
   cols="28" placeholder="Descripcion" /><br /><br />
   <button>Publicar</button>
  </form>
</div>
);
}
}
export default connect()(CrearProducto);
