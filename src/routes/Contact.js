import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <Fragment>
      <h1> Contact Page</h1>
        <ContactForm />
      <Outlet/>
    </Fragment>
  );
}
