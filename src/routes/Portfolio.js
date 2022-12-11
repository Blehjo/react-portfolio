import { Fragment } from 'react';
import ApplicationList from '../components/ApplicationList';
import {ApplicationData} from '../components/ApplicationData';
import Polari from '../components/Polari'
import { Outlet } from 'react-router-dom';

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
    <Fragment style={styles.page}>
      <h1 style={styles.title}>Portfolio</h1>
      <div style={styles.polari}>
        <Polari/>
      </div>
      <div>
        <ApplicationList data={ApplicationData}/>
      </div>
      <Outlet/>
    </Fragment>
  );
}
