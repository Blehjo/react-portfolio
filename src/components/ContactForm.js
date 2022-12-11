import React from 'react';
import emailjs from '@emailjs/browser';
import ValidateForm from '../hooks/validateForm';

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
        <div>
            <div>
                <div className='container'>
                    <form onSubmit={sendEmail}>
                        <div  className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder='Name' minLength='2' name="contactname" onChange={handleChange}/>
                            {errors.contactname && <p className='red'>{errors.contactname}</p>}
                        </div>
                        <div  className='col-8 form-group pt-2 mx-auto'>
                            <input type='email' className="form-control" placeholder="Email Address" name="email" onChange={handleChange}/>
                            {errors.email && <p className='red'>{errors.email}</p>}
                        </div>
                        <div  className='col-8 form-group pt-2 mx-auto'>
                            <input  className='form-control' minLength='2' placeholder='Your message' name='message' onChange={handleChange}></input>
                            {errors.message && <p className='red'>{errors.message}</p>}
                        </div>
                        <div>
                            <input type="submit" className="btn btn-info" value="Send Message"/>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    )

}