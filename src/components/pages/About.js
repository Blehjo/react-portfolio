import React from 'react';

const styles = {
  format: {
    textAlign: 'justify',
    marginLeft: '200px',
    marginRight: '200px'
  },
  title: {
    marginLeft: '100px'
  }
}

export default function About() {
  return (
    <div>
      <h1 style={styles.title}>About Page</h1>
      <p style={styles.format}>
       I am working on becoming a software engineer.  My family is from west Africa, Guinea and Liberia.  I studied finance at the University of Illinois at Chicago and spent half my academic career in Germany. Currently, I am a research navigator at NORC located in Chicago, Illinois.  When I am not at work you can catch me playing video games, painting on whatever I can find, and rating a new restaurant.
      </p>
    </div>
  );
}
