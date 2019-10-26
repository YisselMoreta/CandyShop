import React, { Component } from 'react'
import { connect } from 'react-redux';
import Producto from './Producto';
import EditarProducto from './EditarProducto';
import CrearProducto from './CrearProducto';
import '../css/productos.scss'

 class Productos extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { productos: [],nombre: '', descripcion: '' };
        
    //   }
    render() {
        let productos = this.props && this.props.productos.length > 0 ?
        this.props.productos.map(producto=>
            <li key={producto.id}>{producto.nombre}</li>
        ) : <span></span>
        return (
            <div>
            {/* // <div className="productos" >
            //     <h1>Todos los productos</h1> */}
                
                {/* {this.props.productos.map((producto)=>(
                    <div className="producto" key={producto.id}>
                        {producto.editar ? <EditarProducto producto={producto} key={producto.id}/> : <Producto producto={producto}
                        key={producto.id} />}
                        </div>
                ))} */}
                
                <ul>
                    
                
                </ul>
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