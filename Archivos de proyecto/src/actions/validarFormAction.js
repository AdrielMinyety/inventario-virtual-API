import {
    VALIDAR_FORMULARIO,
    VALIDAR_FORMULARIO_EXITO,
    VALIDAR_FORMULARIO_ERROR
} from '../types';

export function validarFormAction() {
    return (dispatch) => {
        dispatch( iniciarValidacion() );
    }
}

export const iniciarValidacion = () => {
    return {
        type: VALIDAR_FORMULARIO
    }
}

export const validarExito = () => {
    return {
        type: VALIDAR_FORMULARIO_EXITO
    }
}

export const validarError = () => {
    return {
        type: VALIDAR_FORMULARIO_ERROR
    }
}