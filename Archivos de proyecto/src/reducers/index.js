import { combineReducers } from 'redux';
import productosReducer from './productosReducer';
import validarFormReducer from './validarFormReducer';

export default combineReducers({
    productos : productosReducer,
    FormError : validarFormReducer
});