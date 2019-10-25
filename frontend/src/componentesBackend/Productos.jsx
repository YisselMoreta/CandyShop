import React, { Component } from 'react'
import { connect } from 'react-redux';
import Producto from './Producto';
import EditarProducto from './EditarProducto';
import '../css/productos.scss'

 class Productos extends Component {
    render() {
        return (
            <div className="productos" >
                <h1>Todos los productos</h1>
                {this.props.productos.map((producto)=>(
                    <div className="producto" key={producto.id}>
                        {producto.editar ? <EditarProducto producto={producto} key={producto.id}/> : <Producto producto={producto}
                        key={producto.id} />}
                        </div>
                ))}
                
            </div>
        
        );
    }
 }

 const mapStateToProps = (state) => {
    return {
        productos: state
    }
}
export default connect(mapStateToProps)(Productos);