import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="fixed-top navbar navbar-dark bg-dark"> 
            <Link to={'/'} className="navbar-brand">
                Inventario Virtual
            </Link>
            <Link to={'/nuevo-producto'} className="btn text-light bg-primary">
                Agregar producto <span className="font-weight-bold">&#43;</span>
            </Link>
        </nav>
    )
}

export default Nav;
