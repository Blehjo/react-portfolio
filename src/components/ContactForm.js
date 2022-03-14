import React from 'react';
import emailjs from '@emailjs/browser';

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

    return(
        <div>
            <img style={styles.inline} alt='profile picture' width='300px' height='auto' src={require('../assets/profilepicture/newprofilepic.jpg')}/>
            <div style={styles.format}>
                <div className='container'>
                    <form onSubmit={sendEmail}>
                        <div style={styles.div} className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder='Name' name="name"/>
                            {/* {value ? <h3></h3> : <h3 className='red'>Please put in name</h3>} */}
                        </div>
                        <div style={styles.div} className='col-8 form-group pt-2 mx-auto'>
                            <input type='email' className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div style={styles.div} className='col-8 form-group pt-2 mx-auto'>
                            <input style={styles.div} className='form-control' placeholder='Your message' name='message'></input>
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