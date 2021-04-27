import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Importar componentes
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Menu />
                {/* Configurar rutas y paginas */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/experience" component={Experience} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;