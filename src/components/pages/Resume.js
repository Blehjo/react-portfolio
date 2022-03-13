import React from 'react';

const styles = {
  format: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoRows: 'minmax(100px, auto)', 
    gridGap: '50rem',
    textAlign: 'center',
    fontSize: '16px',
    justifyContent: 'space-evenly'
    // lineHeight: '28px',
  },
  div: {
    justifyContent: 'space-evenly'
  },
  page: {
    textAlign: 'center',
    margin: '50px'
  },
  title: {
    margin: '0px 0px 0px 200px',
  },
  one: {
    gridColumn: '1 / 4',
    gridRow: '1',
  },
  two: {
    gridColumn: '2 / 4',
    gridRow: '1',
  },
  three: {
    gridColumn: '3 / 4',
    gridRow: '1',
  },
  four: {
    gridColumn: '4 / 4',
    gridRow: '1',
  },
}

export default function Resume() {
  return (
    <div>
      <h1 style={styles.title}>Resume</h1>
      <h2 style={styles.page}>Proficiencies</h2>
      <div style={styles.format}>
        <div style={styles.one}>
          <h2>Front-End</h2>
          <p>React JS</p>
          <p>Javascript</p>
          <p>CSS</p>
          <p>HTML</p>
        </div>
        <div style={styles.two}>
          <h2>Back-End</h2>
          <p>Axios</p>
          <p>Express</p>
          <p>Node</p>
          <p>Insomnia</p>
        </div>
        <div style={styles.three}>
          <h2>Databases</h2>
          <p>MongoDB</p>
          <p>Mongoose</p>
          <p>MySQL</p>
          <p>SQL</p>
        </div>
        {/* <div style={styles.four}>
          <h2>Tools</h2>
        </div> */}
      </div>
      <p style={styles.page}><a target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/10B626J9KY8nWtvHhI3TjhpCs8rxeinLI/view?usp=sharing'>Link To Resume</a></p>
    </div>
  );
}
