import {
    VALIDAR_FORMULARIO,
    VALIDAR_FORMULARIO_EXITO,
    VALIDAR_FORMULARIO_ERROR
} from '../types';

const initialState = {
    error : false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                error : false
            }
        case VALIDAR_FORMULARIO_EXITO:
            return {
                ...state,
                error : false
            }
        case VALIDAR_FORMULARIO_ERROR:
            return {
                ...state,
                error : true
            }  
        default:
            return state;
    }
}