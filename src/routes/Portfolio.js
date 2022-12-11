import { Fragment } from 'react';
import Polari from '../components/Polari'
import { Outlet } from 'react-router-dom';

export default function Portfolio() {
  return (
    <Fragment>
      <Polari />
      <Outlet/>
    </Fragment>
  );
}
