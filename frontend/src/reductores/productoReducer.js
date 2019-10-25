const productoReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PRODUCTO':
            return state.concat([action.data]);
        case 'DELETE_PRODUCTO':
            return state.filter((producto)=>producto.id !== action.id); 
        case 'EDIT_PRODUCTO':
            return state.map((producto)=>producto.id === action.id ? {...producto,editar:!producto.editar}:producto);
        case 'UPDATE':
            return state.map((producto)=>{
                  if(producto.id === action.id) {
                    return {
                       ...producto,
                       nombre:action.data.nuevoNombre,
                       descripcion:action.data.nuevaDescripcion,
                       editar: !producto.editar
                    }
                  } else return producto;
                })
        default:
          return state || [];
      }
}
export default productoReducer;
