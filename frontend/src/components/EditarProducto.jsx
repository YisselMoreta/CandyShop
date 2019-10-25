import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditarProducto extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const nuevoNombre = this.getNombre.value;
  const nuevaDescripcion = this.getDescripcion.value;
  const data = {
    nuevoNombre,
    nuevaDescripcion
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.producto.id, data: data })
}
render() {
return (
<div key={this.props.producto.id} className="producto">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getNombre = input}
    defaultValue={this.props.producto.nombre} placeholder="Nombre" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getDescripcion = input}
    defaultValue={this.props.producto.descripcion} cols="28" placeholder="Descripcion" /><br /><br />
    <button>Actualizar</button>
  </form>
</div>
);
}
}
export default connect()(EditarProducto);
