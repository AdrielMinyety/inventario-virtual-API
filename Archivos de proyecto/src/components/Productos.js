import React, { useEffect } from 'react';
// componentes
// components
import Spinner from '../components/Spinner';
import Producto from '../components/Producto';

// redux
// redux stuff
import { useDispatch, useSelector } from 'react-redux';
import { imprimirProductosAction } from '../actions/productosActions';

function Productos() {

    // mandar a llamar la accion principal para obtener "productos"
    // call main action to get "productos"
    const dispatch = useDispatch();

    useEffect(() => {
        // obtener productos cuando el componente esté listo
        // get "productos" when the component be ready
        const cargarProductos = () => dispatch( imprimirProductosAction() );
        cargarProductos();
    }, [dispatch])

    // acceder al state
    // access to the state
    const loading = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const productos = useSelector(state => state.productos.productos);

    return (
        <React.Fragment>
            <h2 className="text-center mb-5">Listado de Productos</h2>
            {/* Si esta cargando, cargar Spinner */}
            {/* if is loading, load Spinner */}
            {loading
            ? 
                <Spinner/>
            :
                <table className="table table-striped text-center shadow mb-5">
                    <thead className="bg-primary table-light text-light">
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Opciones</th>
                        </tr>   
                    </thead>
                    <tbody>
                        {productos.map(producto => (
                            <Producto
                            key={producto.id}
                            producto={producto}
                            />
                        ))}
                    </tbody>
                </table>
            }
            {/* Mostrar si hay error */}
            {/* Show if there is some error */}
            {error ? <div className="alert alert-danger font-weight-bold">Error al cargar productos.</div> : null}
        </React.Fragment>
    )
}

export default Productos;
