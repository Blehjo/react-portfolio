import React from 'react';
import ApplicationList from '../ApplicationList';
import {ApplicationData} from '../ApplicationData';
import Polari from '../Polari'

const styles = {
  page: {
    marginBottom: '200px',
  },
  title: {
    marginLeft: '200px',
    marginBottom: '50px',
  },
  polari: {
    textAlign: 'center',
    width: '72%',
    height: 'auto',
    margin: 'auto',
    border: 'solid',
    borderRadius: '10px',
  }
}

export default function Portfolio() {
  return (
    <div style={styles.pa}>
      <h1 style={styles.title}>Portfolio</h1>
      <div style={styles.polari}>
        <Polari/>
      </div>
      <div>
        <ApplicationList data={ApplicationData}/>
      </div>
    </div>
  );
}
