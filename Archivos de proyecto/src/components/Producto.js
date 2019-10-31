import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// redux
import { useDispatch } from 'react-redux';
import { eliminarProductoAction } from '../actions/productosActions';

const Producto = ({producto}) => {
    // dispatch para ejecutar las acciones
    // dispatch to fire actions
    const dispatch = useDispatch();
    const confirmarEliminarProducto = id => {         
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Si lo eliminas, no podras recuperarlo!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    '¡ELIMINADO!',
                    'El producto ha sido eliminado del inventario.',
                    'success'
                )
                // console.log(id);
                dispatch( eliminarProductoAction(id) );
            }
        })
    }

    return (
        <tr>
            <td className="font-weight-bold">
                {producto.nombre}
            </td>
            <td>
                {producto.caracteristica}
            </td>
            <td className="font-weight-bold">
                <span className="badge badge-info p-2 px-5">
                    $ {producto.precio}
                </span>
            </td>
            <td className="d-flex justify-content-center">
                <Link
                    className="btn btn-primary btn-sm" 
                    to={`/editar-producto/${producto.id}`}>
                    Editar
                </Link>
                <button
                    onClick={ () => confirmarEliminarProducto(producto.id) }
                    className="btn btn-dark btn-sm ml-2">Eliminar</button>
            </td>
        </tr>
    )
}

export default Producto;
