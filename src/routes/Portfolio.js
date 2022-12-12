import { Fragment } from 'react';
import Applications from '../components/Applications';
import { Outlet } from 'react-router-dom';

export default function Portfolio() {
  return (
    <Fragment>
      <Applications />
      <Outlet/>
    </Fragment>
  );
}
