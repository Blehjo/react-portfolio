import React,  { useRef } from 'react';
import ValidateForm from '../hooks/formValidation';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const service = process.env.SERVICE_ID
    const template = process.env.TEMPLATE_ID
    const user = process.env.USER
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(service, template, form.current, user)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        alert("email sent")
        window.location.reload(false)
    };

    // final sumbit function
    const formSubmit = () =>{
        console.log("callback function when form is submitted!");
        console.log('form values', values);
    }
    // custom hook call
    const{values, errors, handleChange, handleSumbit} = ValidateForm(formSubmit)

    return (
                        <form onSubmit={sendEmail} name="contact" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <input type="hidden" name="form-name" value="contact" />
                            {/* Name */}
                            <div>
                                <input type="hidden" name="form-name" value="contact" />
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="given-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        placeholder='Enter name here'
                                        onChange={handleChange}
                                    />
                                    {errors.contactname && <h3 className='red'>{errors.contactname}</h3>}
                                </div>
                            </div>
                            {/* Last Name */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="femail"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        placeholder="Enter email address"
                                        onChange={handleChange}
                                    />
                                    {errors.email && <h3 className='red'>{errors.email}</h3>}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="message"
                                        name="message"
                                        type="message"
                                        autoComplete="message"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        placeholder='Talk to me'
                                        onChange={handleChange}
                                    />
                                    {errors.message && <h3 className='red'>{errors.message}</h3>}
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Let's talk
                                </button>
                            </div>

                        </form>
    )
}