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
    EDITAR_PRODUCTO_EXITO,
    EDITAR_PRODUCTO_ERROR,
    INICIA_PRODUCTO_EDITADO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR    
} from '../types';

const initialState = {
    productos : [],
    error : false,
    loading : false,
    dataEditar : {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                error: false
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                error: false,
                productos : [...state.productos, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                error: true
            }
        case EMPEZAR_DESCARGA_PRODUCTOS:
            return {
                ...state,
                error: false,
                loading: true,
                dataEditar: {}
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                productos: action.payload,
                error: false,
                loading: false,
                dataEditar: {}
            }
        case DESCARGA_PRODUCTOS_ERROR:
            return {
                ...state,
                productos: [],
                error: true,
                loading: false
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                error: false
            }
        case PRODUCTO_ELIMINAR_EXITO:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== action.payload),
                error: false
            }
        case PRODUCTO_ELIMINAR_ERROR:
            return {
                ...state,
                error: true
            }
        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                error: false,
                dataEditar: {}
            }
        case EDITAR_PRODUCTO_EXITO:
            return {
                ...state,
                error: false,
                dataEditar: action.payload
            }
        case EDITAR_PRODUCTO_ERROR:
            return {
                ...state,
                error: true
            }
        case INICIA_PRODUCTO_EDITADO:
            return {
                ...state,
                error: false
            }
        case PRODUCTO_EDITADO_EXITO:
            return {
                ...state,
                error: false,
                productos: state.productos.map(producto => producto.id === action.payload.id ? producto = action.payload : producto )
            }
        case PRODUCTO_EDITADO_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}