import React from 'react';
import emailjs from '@emailjs/browser';
import ValidateForm from '../hooks/validateForm';

// const service = process.env.SERVICE_ID;
// const template = process.env.TEMPLATE_ID;
// const user = process.env.USER_ID;

const styles = {
    format: {
        textAlign: 'center',
        margin: 'auto',
        width: '50%',
        // padding: '20px'
    },
    div: {
        padding: '20px'
    },
    button: {
        background: 'white',
        border: 'solid black'
    },
    inline: {
        float: 'left',
        marginLeft: '200px',
        borderRadius: '20px',

    }
}

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_wi86re4', 'template_dabilli', e.target, 'r5R44dVIpEoAxy1HD')
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
    // custom hook call
    const{ errors, handleChange } = ValidateForm(formSubmit)

    return(
        <div>
            <img style={styles.inline} alt='profile' width='300px' height='auto' src={require('../assets/profilepicture/newprofilepic.jpg')}/>
            <div style={styles.format}>
                <div className='container'>
                    <form onSubmit={sendEmail}>
                        <div style={styles.div} className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder='Name' minLength='2' name="contactname" onChange={handleChange}/>
                            {errors.contactname && <p className='red'>{errors.contactname}</p>}
                        </div>
                        <div style={styles.div} className='col-8 form-group pt-2 mx-auto'>
                            <input type='email' className="form-control" placeholder="Email Address" name="email" onChange={handleChange}/>
                            {errors.email && <p className='red'>{errors.email}</p>}
                        </div>
                        <div style={styles.div} className='col-8 form-group pt-2 mx-auto'>
                            <input style={styles.div} className='form-control' minLength='2' placeholder='Your message' name='message' onChange={handleChange}></input>
                            {errors.message && <p className='red'>{errors.message}</p>}
                        </div>
                        <div>
                            <input style={styles.button} type="submit" className="btn btn-info" value="Send Message"/>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    )

}