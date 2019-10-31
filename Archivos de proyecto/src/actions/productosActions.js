import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    EMPEZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINAR_EXITO,
    PRODUCTO_ELIMINAR_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    EDITAR_PRODUCTO_ERROR,
    EDITAR_PRODUCTO_EXITO,
    INICIA_PRODUCTO_EDITADO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
} from '../types';

import clientesAxios from '../config/axios';
import Swal from 'sweetalert2';

// crear nuevo producto - Funcion Principal.
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch( nuevoProducto() );

        clientesAxios.post("/inventario", producto)
            .then(producto => {
                dispatch( agregarNuevoProducto(producto.data) );
                Swal.fire({
                    type: 'success',
                    title: 'Producto agregado',
                    showConfirmButton: false,
                    timer: 1500
                  })                  
            })
            .catch(error => dispatch( errorNuevoProducto() ))
    }
}

export const nuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
})

export const agregarNuevoProducto = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto 
})

export const errorNuevoProducto = () => ({
    type: AGREGAR_PRODUCTO_ERROR
})

// Imprimir Productos - Funcion Principal
export function imprimirProductosAction(){
    return (dispatch) => {
        dispatch( empezarDescargaProductos() );

        // consultar API
        clientesAxios.get("/inventario")
            .then(respuesta => {
                // console.log(respuesta);
                dispatch( descargarProductosExito(respuesta.data) );
            })
            .catch(error => dispatch( descargarProductosError() ));
    }
}

export const empezarDescargaProductos = () => ({
    type : EMPEZAR_DESCARGA_PRODUCTOS
})

export const descargarProductosExito = (productos) => ({
    type : DESCARGA_PRODUCTOS_EXITO,
    payload : productos
})

export const descargarProductosError = () => ({
    type : DESCARGA_PRODUCTOS_ERROR
})

// Eliminar Producto - Funcion Principal
export function eliminarProductoAction(id) {
    return (dispatch) => {
        dispatch( eliminarProducto() );

        clientesAxios.delete(`/inventario/${id}`)
            .then(respuesta => {
                dispatch( eliminarProductoExito(id) )
            })
            .catch(error => {
                console.log(error);
                dispatch( eliminarProductoError() );
            })
    }
}

const eliminarProducto = () => ({
    type: OBTENER_PRODUCTO_ELIMINAR
})
const eliminarProductoExito = (id) => ({
    type: PRODUCTO_ELIMINAR_EXITO,
    payload: id
})
const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINAR_ERROR
})

// Editar Producto - Funcion Principal
export function obtenerProductoEditarAction(id) {
    return (dispatch) => {
        dispatch( obtenerProductoEditar() )

        // obtener datos de la api
        clientesAxios.get(`/inventario/${id}`)
            .then(producto => {
                // console.log(producto.data)
                dispatch( productoEditarExito(producto.data) )
            })
            .catch(error => {
                console.log(error)
                dispatch( productoEditarError() )
            })
    }
}

export const obtenerProductoEditar = () => ({
    type: OBTENER_PRODUCTO_EDITAR
})

export const productoEditarExito = (producto) => ({
    type: EDITAR_PRODUCTO_EXITO,
    payload: producto
})

export const productoEditarError = () => ({
    type: EDITAR_PRODUCTO_ERROR
})

// Producto Editado - Funcion Principal
export function editarProductoAction(producto) {
    return (dispatch) => {
        dispatch( iniciarEditarProducto() )
        // console.log(producto)
        // obtener datos de la api
        clientesAxios.put(`/inventario/${producto.id}`, producto)
            .then(producto => {
                // console.log(producto.data)
                dispatch( productoEditadoExito(producto.data) )
                Swal.fire({
                    type: 'success',
                    title: 'Producto editado',
                    showConfirmButton: false,
                    timer: 1500
                  })                  
            })
            .catch(error => {
                // console.log(error)
                dispatch( productoEditadoError() )
            })
    }
}

export const iniciarEditarProducto = () => ({
    type: INICIA_PRODUCTO_EDITADO
})

export const productoEditadoExito = (producto) => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})

export const productoEditadoError = () => ({
    type: PRODUCTO_EDITADO_ERROR
})
