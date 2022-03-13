import React from 'react';
import ApplicationList from '../ApplicationList';
import {ApplicationData} from '../ApplicationData';

const styles = {
  title: {
    marginLeft: '200px',
    marginBottom: '50px',
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
