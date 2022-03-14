import React from 'react';
import ContactForm from '../ContactForm'

const styles = {
  format: {
    textAlign: 'center',
    margin: 'auto',
  },
  title: {
    // textAlign: 'center',
    margin: 'auto auto 50px 200px'
  }
}

export default function Contact() {
  return (
    <div>
      <h1 style={styles.title}>Contact Page</h1>
      <div style={styles.format}>
        <ContactForm />
      </div>
    </div>
  );
}
