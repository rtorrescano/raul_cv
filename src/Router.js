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
                    <Route exact path="/raul_cv" component={Home} />
                    <Route exact path="/raul_cv/home" component={Home} />
                    <Route exact path="/raul_cv/about" component={About} />
                    <Route exact path="/raul_cv/experience" component={Experience} />
                    <Route exact path="/raul_cv/contact" component={Contact} />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;