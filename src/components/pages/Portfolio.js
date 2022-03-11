import React from 'react';
import ApplicationList from '../ApplicationList';
import {ApplicationData} from '../ApplicationData';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <ApplicationList data={ApplicationData}/>
    </div>
  );
}
