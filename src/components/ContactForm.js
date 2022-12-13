import React, { Fragment } from 'react';
import emailjs from '@emailjs/browser';
import ValidateForm from '../hooks/validateForm';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    const formSubmit = () =>{
        console.log("callback function when form is submitted!");
    }
    
    const{ errors, handleChange } = ValidateForm(formSubmit)

    return(
        <Fragment>
        <Form onSubmit={sendEmail}>
            <Row>
                <Col lg={10} xl={10}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control name="contactname" minLength='2' className="form-control" onChange={handleChange} placeholder="Name" type="name" rows={3} />
                        {errors.contactname && <p className='red'>{errors.contactname}</p>}
                    </Form.Group>
                </Col>
                <Col lg={10} xl={10}>
                    <Form.Group className="mb-3" controlId="ControlTextarea1">
                        <Form.Control name="email" className="form-control" onChange={handleChange} placeholder="Email Address" type="email" rows={3} />
                        {errors.email && <p className='red'>{errors.email}</p>}
                    </Form.Group>
                </Col>
                <Col lg={10} xl={10}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control name='message' minLength='5' onChange={handleChange} placeholder="Write your message here" as="textarea" rows={3} />
                        {errors.message && <p className='red'>{errors.message}</p>}
                    </Form.Group>
                </Col>
                <Col lg={10} xl={10}>
                    <Button style={{width: '100%', height: '85%'}} variant="primary" type="submit" value="Send Message">
                        Send Message
                    </Button>
                </Col>
            </Row>
        </Form>
        </Fragment>
    )

}