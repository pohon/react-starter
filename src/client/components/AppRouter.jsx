import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Cart from './pages/Cart.jsx';

const AppRouter = (props) => (
    <Switch>
        <Route path="/" component={Home} 
            exact/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/cart" component={Cart}/>
    </Switch>
);

export default AppRouter;