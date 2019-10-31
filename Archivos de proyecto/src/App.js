import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from './store';

// components
import Nav from './components/Nav';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Nav />
        <div className="container mt-5 pt-5">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/nuevo-producto" component={NuevoProducto} />
            <Route exact path="/editar-producto/:id" component={EditarProducto} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
