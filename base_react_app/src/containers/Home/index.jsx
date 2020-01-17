import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import Clock from './Clock';
import Cards from './Cards';

const Home = () => (
  <div>
    <CssBaseline>
      <Grid container>
        <Grid item xs={8}>
          <Header id={2} />
          <Clock />
        </Grid>
        <Grid item xs={4}>
          <Cards time='12:00' title='Título1' body='Este es un body' />
          <p />
          <Cards time='13:00' title='Título2' body='Este no es un body' />
          <p />
          <Cards time='14:00' title='Título3' body='¿Este es un body?' />
        </Grid>
      </Grid>
    </CssBaseline>
  </div>
);

export default Home;
