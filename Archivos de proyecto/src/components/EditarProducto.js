import React, { useEffect, useRef } from 'react';
import Spinner from '../components/Spinner';

// redux
import { obtenerProductoEditarAction, editarProductoAction } from '../actions/productosActions';
import { validarFormAction, validarExito, validarError } from '../actions/validarFormAction';
import { useDispatch, useSelector } from 'react-redux';

function EditarProducto({ match, history }) {

    // uso de ref
    // use ref
    const nombreProductoRef = useRef('');
    const caracteristicaProductoRef = useRef('');
    const precioProductoRef = useRef('');

    // Acceder al State principal
    // Access to main State
    const producto = useSelector(state => state.productos.dataEditar);
    const error = useSelector(state => state.productos.error);
    const formError = useSelector(state => state.FormError.error);
    // obtener id para editar
    // get id to edit
    const { id } = match.params;

    // dispatch para ejecutar las acciones
    // dispatch to fire actions
    const dispatch = useDispatch();
    const editarProducto = producto => dispatch( editarProductoAction(producto) );
    const validarForm = () => dispatch( validarFormAction() );
    const validacionExitosa = () => dispatch( validarExito() );
    const validacionError = () => dispatch( validarError() );
    
    // cuando el componente esté listo, cargar acciones
    // when the component get ready, load actions
    useEffect(() => {
        dispatch( obtenerProductoEditarAction(id) )
    }, [dispatch, id])

    // guardar producto editado
    // save "producto" edited
    const submitEditarProducto = e => {
        e.preventDefault();
        // validar Form
        // validate Form
        validarForm();
        if(nombreProductoRef.current.value.trim() === '' || caracteristicaProductoRef.current.value.trim() === '' || precioProductoRef.current.value === null || precioProductoRef.current.value === 0) {
            validacionError();
            console.log("error validacion");
            return;
        }
        // si la validación fue exitosa
        // If the validation was success
        validacionExitosa();
        // editar "producto"
        // edit "producto"
        editarProducto({
            id,
            nombre: nombreProductoRef.current.value,
            caracteristica: caracteristicaProductoRef.current.value,
            precio: precioProductoRef.current.value
        })
        // redireccionar
        // redirect
        history.push('/');
    }

    return (
        <div className="row justify-content-center my-5">
        <div className="col-md-8">
            { error ?
                <div className="alert alert-danger my-3">
                    Se ha producido un error, intente mas tarde.
                </div>
            :
                <div className="card shadow">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Editar Producto</h2>
                        {!producto ? <Spinner/> : null}
                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Editar Nombre"
                                    defaultValue={producto.nombre}
                                    ref={nombreProductoRef}
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Editar Caracteristica" 
                                    defaultValue={producto.caracteristica}
                                    ref={caracteristicaProductoRef}
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Editar Precio"
                                    defaultValue={producto.precio}
                                    ref={precioProductoRef}
                                    />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
                        {/* alert condicional */}
                        { formError ?
                            <div className="alert alert-danger my-3">
                                Todos los campos son obligatorios
                            </div>
                        : null }
                        {/* ================ */}                        
                    </div>
                </div>
            }
        </div>
    </div>
    )
}

export default EditarProducto;