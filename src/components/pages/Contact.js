import React from 'react';
import ContactForm from '../ContactForm'

const styles = {
  format: {
    textAlign: 'justify',
    marginLeft: '600px',
    marginRight: '600px'
  },
  title: {
    marginLeft: '200px'
  }
}

export default function Contact() {
  return (
    <div>
      <h1 style={styles.title}>Contact Page</h1>
      <p style={styles.format}>
        <ContactForm />
      </p>
    </div>
  );
}
