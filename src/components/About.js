import React, { Component } from 'react';


class About extends Component {
    render() {
        return (


            <div className="container py-5" id="hanging-icons">
               
                <h2 className="pb-2 border-bottom">Acerca de mí</h2>
                <div className="row g-5 py-5">
                    <div className="col-md-4 d-flex align-items-start">
                        <div className="card shadow-sm">    
                            <div className="card-body">
                                <h4>Perfil</h4>
                                <p className="card-text" align="justify"> <b>Desarrollo y análisis de sistemas</b> por más de 13 años, desarrollador web FrontEnd y BackEnd.
                                    <b> Administrador de proyectos</b> por más de 7 años implementando
                                    metodologías agiles (Scrum), coordinando equipos de trabajo, levantamiento de requerimientos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-start">
                        <div className="card shadow-sm">    
                            <div className="card-body">
                                <h4>Conocimientos</h4>
                                <p className="card-text" align="justify">Capacidad de implementar y utilizar la metodología Scrum para realizar el desarrollo
                                de un sistema mediante el uso de las siguientes tecnologías: Coldfusion, PHP, HTML 5,
                                Javascript, CSS 3, React Js, Node Js, Angular, Vue Js, MySQL, Oracle, Postgres, Mongo DB, Joomla, Apache, IIS.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-start">
                        <div className="card shadow-sm">    
                            <div className="card-body">
                                <h4>Habilidades</h4>
                                <p className="card-text" align="justify"> Capacidad de llevar la administrador de proyectos, atención de forma simultanea de varios proyectos,
                                    capacidad de comunicar a los involucrados el estatus del proyecto, coordinación de personal,
                                    trabajo en equipo, paciencia, trabajo bajo presión, comprometido.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;