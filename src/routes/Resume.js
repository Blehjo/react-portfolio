import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const styles = {
  format: {
    width: 'auto',
    textAlign: 'center',
  },
  page: {
    textAlign: 'center',
    margin: '50px'
  },
  title: {
    margin: '0px 0px 0px 200px',
  },
  column: {
    float: 'left',
    textAlign: 'center',
    padding: '10px',
    border: 'solid',
    borderRadius: '10px',
    width: '25%'
  },
  row: {
    content: '',
    display: 'table',
    clear: 'both',
    width: '100%',
    margin: 'auto'
  },
  medium: {
    // justifyContent: 'center',
    width: '50%',
    margin: 'auto',
  },
}

export default function Resume() {
  return (
    <Fragment>
      <h1 style={styles.title}>Resume</h1>
      <h2 style={styles.page}>Proficiencies</h2>
      <div style={styles.medium}>
        <div style={styles.row}>
            <div style={styles.column}>
              <h2>Front-End</h2>
              <p>React JS</p>
              <p>Javascript</p>
              <p>CSS</p>
              <p>HTML</p>
            </div>
            <div style={styles.column}>
              <h2>Back-End</h2>
              <p>Axios</p>
              <p>Express</p>
              <p>Node</p>
              <p>Insomnia</p>
            </div>
            <div style={styles.column}>
              <h2>Databases</h2>
              <p>MongoDB</p>
              <p>Mongoose</p>
              <p>MySQL</p>
              <p>SQL</p>
            </div>
            <div style={styles.column}>
              <h2>Tools</h2>
              <p>MERN Stack</p>
              <p>Heroku</p>
              <p>Git</p>
              <p>User Authentication</p>
            </div>
        </div>
      </div>
      <p style={styles.page}><a target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1o2yBTDF3RYsgWMEvibkVeEGmdHjpVEHV/view?usp=sharing'>Link To Resume</a></p>
      <Outlet/>
    </Fragment>
  );
}