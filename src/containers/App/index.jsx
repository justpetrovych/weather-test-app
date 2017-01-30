import React from 'react';
import { Grid } from 'react-bootstrap';
import localStorage from 'localStorage';
import Notifications, { notify } from 'react-notify-toast';
import List from '../List';

const arr = [];

function initLocalCities(array) {
  localStorage.setItem('cities', array.join());
  return array;
}

function initLocalActiveKey(num) {
  localStorage.setItem('key', num);
  return num;
}

const cities = localStorage.getItem('cities') ?
  localStorage.getItem('cities').split(',') :
  initLocalCities(arr);

const key = localStorage.getItem('key') ?
  localStorage.getItem('key') :
  initLocalActiveKey(0);

const App = () => (
  <div className="app">
    <div className="blur" />
    <Notifications />
    <Grid>
      <List cities={cities} activeKey={key} notify={notify} />
    </Grid>
  </div>
);

export default App;
