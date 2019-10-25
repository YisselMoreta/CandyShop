import React, { Component } from 'react';
import {connect} from 'react-redux';

 class Producto extends Component {
   
    render() {
        return (
            <div className="producto">
  <h2 className="productoNombre">{this.props.producto.nombre}</h2>
  <p className="productoDescripcion">{this.props.producto.descripcion}</p>
  <div className="control-buttons">
    <button className="editar"
    onClick={() => this.props.dispatch({ type: 'EDIT_PRODUCTO', id: this.props.producto.id })
    }
    >Editar</button>
    <button className="eliminar"
    onClick={() => this.props.dispatch({ type: 'DELETE_PRODUCTO', id: this.props.producto.id })}
    >Eliminar</button>
  </div>
</div>
        )
    }
}
export default connect()(Producto);