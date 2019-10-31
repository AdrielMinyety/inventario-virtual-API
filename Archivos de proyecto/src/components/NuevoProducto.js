import React, { useState } from 'react';

// Redux
import { crearNuevoProductoAction } from '../actions/productosActions';
import { validarFormAction, validarExito, validarError } from '../actions/validarFormAction';
import { useDispatch, useSelector } from 'react-redux';

const NuevoProducto = ({history}) => {
    // state local
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(null);
    const [caracteristica, setCaracteristica] = useState('');
 
    // Crear nuevo producto 
    // make new "producto"
    const dispatch = useDispatch();
    const agregarProducto = (producto) => dispatch(  crearNuevoProductoAction(producto) );
    const validarForm = () => dispatch( validarFormAction() );
    const validacionExitosa = () => dispatch( validarExito() );
    const validacionError = () => dispatch( validarError() );

    // ver si en el state principal hay un error
    // if there is an error in main State 
    const error = useSelector(state => state.FormError.error);

    // Agregar nuevo "producto"
    // add new "producto"
    const enviarNuevoProducto = e => {
        e.preventDefault();
        // Validar el formulario
        // validate Form
        validarForm();
        if(nombre.trim() === '' || caracteristica.trim() === '' || precio === null || precio === 0) {
            validacionError();
            console.log("error validacion");
            return;
        }
        // si validacion fue exitosa
        // if the validation was success
        validacionExitosa();
        // crear el nuevo producto
        // make the new "producto"
        agregarProducto({
            nombre, caracteristica, precio
        });
        // redireccionar
        // Redirect
        history.push('/');
    }

    return (
        <div className="row justify-content-center my-5">
            <div className="col-md-8">
                <div className="card shadow">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Producto</h2>
                        <form onSubmit={enviarNuevoProducto}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre Producto"
                                    defaultValue={nombre}
                                    onChange={e => setNombre(e.target.value)} 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Caracteristica Producto" 
                                    defaultValue={caracteristica}
                                    onChange={e => setCaracteristica(e.target.value)} 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Precio Por Unidad Producto"
                                    defaultValue={precio}
                                    onChange={e => setPrecio(parseInt( e.target.value, 10) ) }
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
                    {/* alert condicional */}
                    { error ?
                        <div className="alert alert-danger my-3">
                            Todos los campos son obligatorios
                        </div>
                    : null }
                    {/* ================ */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto;