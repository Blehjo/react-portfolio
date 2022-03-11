import React from 'react';
import ApplicationList from '../ApplicationList';
import {ApplicationData} from '../ApplicationData';

const styles = {
  format: {
    textAlign: 'justify',
    marginLeft: '200px',
    marginRight: '200px',
    display: 'inline-block',
  },
  title: {
    marginLeft: '200px'
  },
  
}

export default function Portfolio() {
  return (
    <div>
      <h1 style={styles.title}>Portfolio</h1>
      <div>
        <ApplicationList data={ApplicationData}/>
      </div>
    </div>
  );
}
