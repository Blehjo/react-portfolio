import React from 'react';

const styles = {
  format: {
    display: 'inline',
    // verticalAlign: 'top',
    fontSize: '16px',
    // lineHeight: '28px',
  },
  div: {
    justifyContent: 'space-between'
  }
}

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href='https://drive.google.com/file/d/10B626J9KY8nWtvHhI3TjhpCs8rxeinLI/view?usp=sharing'>Link To Resume</a>
      <h2>Proficiencies</h2>
      <div style={styles.div}>
        <h4 style={styles.format}>Front-End</h4>
        <h4 style={styles.format}>Back-End</h4>
        <h4 style={styles.format}>Databases</h4>
      </div>
    </div>
  );
}
