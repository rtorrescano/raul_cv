import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import Global from '../Global';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import image1 from '../assets/images/contact.jpg';

class Experience extends Component {
    url = Global.url;
    nameRef = React.createRef();
    mailRef = React.createRef();
    contentRef = React.createRef();
    messageRef = React.createRef();

    state = {
        contact : {},
        estatus: null
    };

    componentWillMount(){
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es obligatorio'                
              },
        });
        
    }

    changeState=() =>{
        this.setState({
            contact : {
                name: this.nameRef.current.value,
                mail: this.mailRef.current.value,
                content: this.contentRef.current.value,
                message: this.messageRef.current.value
            }
        });
        this.validator.showMessages();
        this.forceUpdate();
    }

    saveContact = (e) =>{
        e.preventDefault();
        this.changeState();

        if(this.validator.allValid()){
            axios.post(this.url+'save', this.state.contact)
             .then( res =>{
                 if(res.data.contact){
                    this.setState({
                        contact: res.data.contact,
                        status: 'success'
                    });

                swal(
                    'Mensaje creado',
                    'El mensaje se ha enviado correctamente',
                    'success'
                )

                 }else{
                     this.setState({
                         status: 'failed'
                     });
                 }
             })
        }else{
            this.setState({
                         status: 'failed'
                     });
            this.validator.showMessages();
            this.forceUpdate();
        }
        
        e.target.reset();
    }

    render() {



        return (


            <div className="container col-xl-10 col-xxl-8  py-5">
                <div className="row align-items-center g-5">
                    <div class="col-lg-7 text-center text-lg-start">
                        <h3>Contacto</h3>
                        <Form onSubmit={this.saveContact} className="form-floating">
                            <Form.Row>
                                <Form.Group className="col-md-12" controlId="formGridEmail">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Ingresa el nombre" ref={this.nameRef} onChange={this.changeState} />
                                    {this.validator.message('name', this.state.contact.name, 'required', { className: 'text-danger' })}
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group className="col-md-12" controlId="formGridEmail">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control type="email" placeholder="Ingresa el correo electrónico" ref={this.mailRef} onChange={this.changeState} />
                                    {this.validator.message('mail', this.state.contact.mail, 'required|email', { className: 'text-danger' })}
                                </Form.Group>                                
                            </Form.Row>
                            <Form.Row>
                            <Form.Group className="col-md-12" controlId="formGridPassword">
                                <Form.Label>Asunto</Form.Label>
                                <Form.Control type="text" placeholder="Escribe el asunto o tema a tratar"  ref={this.contentRef} onChange={this.changeState} />
                                {this.validator.message('content', this.state.contact.content, 'required', { className: 'text-danger' })}
                            </Form.Group>
                            <Form.Group className="col-md-12" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control as="textarea" rows={3}  ref={this.messageRef} onChange={this.changeState} />
                                {this.validator.message('message', this.state.contact.message, 'required', { className: 'text-danger' })}
                            </Form.Group>
                            </Form.Row>
                            <Col xs="auto">
                            <Button type="submit" variant="success">Enviar</Button>
                            </Col>  
                            <br />                 
                        </Form>                        
                    </div>
                    <div class="col-12 mx-auto col-lg-5">
                        <img className="p-2 border rounded-3 bg-light" src={image1} alt="Image1" width="320" />                        
                    </div>
                </div>
            </div>

        );
    }
}

export default Experience;