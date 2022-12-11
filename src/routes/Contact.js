import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import ContactForm from '../components/ContactForm'

const styles = {
  format: {
    textAlign: 'center',
    margin: 'auto',
  },
  title: {
    margin: 'auto auto 50px 200px'
  }
}

export default function Contact() {
  return (
    <Fragment>
      <h1 style={styles.title}>Contact Page</h1>
      <div style={styles.format}>
        <ContactForm />
      </div>
      <Outlet/>
    </Fragment>
  );
}
