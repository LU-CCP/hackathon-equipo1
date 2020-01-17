import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import PublicIcon from '@material-ui/icons/Public';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Autocomplete } from '@material-ui/lab/';

import logo from '../../resources/lagash-logo.png';
import argentina from '../../resources/banderas/argentina.png';
import chile from '../../resources/banderas/chile.png';
import colombia from '../../resources/banderas/colombia.png';
import eeuu from '../../resources/banderas/eeuu.png';
import mexico from '../../resources/banderas/mexico.png';
import uruguay from '../../resources/banderas/uruguay.png';
import venezuela from '../../resources/banderas/venezuela.png';

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

const Header = ({ id }) => {
  const classes = useStyles();

  function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, char =>
            String.fromCodePoint(char.charCodeAt(0) + 127397)
          )
      : isoCode;
  }

  const countries = [
    { city: 'Chile' },
    { city: 'Argentina' },
    { city: 'Uruguay' }
  ];

  return (
    <Grid container>
      <Grid item xs={4}>
        <PublicIcon fontSize='large' style={{ color: 'green' }} />
        <Autocomplete
          id='country-select-demo'
          style={{ width: 300 }}
          options={countries}
          classes={{
            option: classes.option
          }}
          autoHighlight
          // eslint-disable-next-line react/jsx-no-bind
          renderOption={options => (
            <Fragment>
              <div>
                <div>
                  <img
                    width='20'
                    src='data:image/png;base64,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'
                  />
                </div>

                <div>
                  <Typography style={{ paddingRight: '5px' }}>Chile</Typography>
                  <br />
                  <Typography>Oficina concepción</Typography>
                </div>
              </div>
            </Fragment>
          )}
          // eslint-disable-next-line react/jsx-no-bind
          renderInput={params => (
            <TextField
              {...params}
              label='Choose a country'
              variant='outlined'
              fullWidth
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password'
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={8}>
        <img src={logo} alt='logo' className={classes.logo} />
      </Grid>
    </Grid>
  );
};

export default Header;
