/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import {
//   Dialog,
//   Button,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle
// } from '@material-ui/core';

// import alarm from '../../resources/alarm.png';
import logo from '../../resources/lagash-logo.png';
import argentina from '../../resources/banderas/argentina.png';
import chile from '../../resources/banderas/chile.png';
import colombia from '../../resources/banderas/colombia.png';
import eeuu from '../../resources/banderas/eeuu.png';
import mexico from '../../resources/banderas/mexico.png';
import uruguay from '../../resources/banderas/uruguay.png';
import venezuela from '../../resources/banderas/venezuela.png';

import '../alarm-animation.css';

const useStyles = makeStyles({
  logo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  bandera: {
    width: '40%',
    height: '45%',
    marginLeft: '5px'
  }
});

// const beep = require('browser-beep');

const Header = ({ id }) => {
  const classes = useStyles();

  // beep({ frequency: 3000 });

  // setInterval(() => {
  //   beep(2);
  // }, 1000);

  let bandera;

  switch (id) {
    case 1:
      bandera = argentina;
      break;
    case 2:
      bandera = chile;
      break;
    case 3:
      bandera = colombia;
      break;
    case 4:
      bandera = eeuu;
      break;
    case 5:
      bandera = mexico;
      break;
    case 6:
      bandera = uruguay;
      break;
    case 7:
      bandera = venezuela;
      break;

    default:
      break;
  }

  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container>
      <Grid item xs={2}>
        <img
          src={bandera}
          alt='bandera'
          align='left'
          className={classes.bandera}
        />
      </Grid>
      <Grid item xs={8}>
        <img src={logo} alt='logo' className={classes.logo} />

        {/* <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>Title</DialogTitle>
          <img src={alarm} alt='logo' className='App-logo' />

          <DialogContent>Body</DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              {'Disagree'}
            </Button>
            <Button onClick={handleClose} color='primary' autoFocus>
              {'Agree'}
            </Button>
          </DialogActions>
        </Dialog> */}
      </Grid>
    </Grid>
  );
};

export default Header;
