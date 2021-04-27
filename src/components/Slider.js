import React, { Component } from 'react';
import image1 from '../assets/images/developer.png';
import pdf1 from '../assets/files/CV_RTG_2021.pdf';
import { Button } from 'react-bootstrap';


class Slider extends Component {
    render() {
        return (
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3" align="left">
                        <p>Hola, mi nombre es</p>
                        <h1 className="display-4 fw-bold lh-1">Raul Torrescano</h1>
                        <p className="lead">Licenciado en ciencias de la informática, con experiencia en el desarrollo de aplicativos para web
                                            y administración de proyectos mediante la utilización de la metodología Scrum.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start ">
                            <a href = {pdf1} className="btn btn-primary stretched-link" target = "_blank">Descargar CV</a>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 position-relative overflow-hidden shadow-lg" align="rigth">
                        <div className="position-lg-absolute top-0 left-0 overflow-hidden">
                            <img className="d-block rounded-lg-3" src={image1} alt="Image1" width="320" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;