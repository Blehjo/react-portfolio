import React from 'react';

const styles = {
  format: {
    textAlign: 'justify',
    marginLeft: '200px',
    marginRight: '200px'
  },
  title: {
    marginLeft: '200px'
  },
  div: {
    margin: '50px 0px 50px 200px',
  }
}

export default function About() {
  return (
    <div>
      <h1 style={styles.title}>About Page</h1>
      <img style={styles.div} width='300px' height='auto' alt='profile' src={require('/Users/blehjo/bootcamp/homework/react-portfolio/src/assets/profilepicture/newprofilepic.jpg')}/>
      <p style={styles.format}>
       My name is Bleh Seton and although I was born in Chicago, my family is from Guinea and Liberia. University of Illinois at Chicago is my alma mater, but I spent half my academic career between Germany and Austria. When I am not at work you can catch me playing video games, painting on whatever I can find, and rating a new restaurant.<br></br><br></br>Currently, I work in public health as a resource navigator. I decided to venture into web development during the pandemic.  My current job requires navigating the web in order to learn about organizations that offer resources to individuals and families in neighborhoods that do not have access to basic necessities. After being apart of seminars and using sites with a catalogue of organizations, I learned that a lot of the sites are difficult to navigate and aren't reliable. From there, I decided that I wanted to understand the ins and outs of programming to solve these problems. 
      </p>
    </div>
  );
}
