import React from 'react';
import { makeStyles } from '@material-ui/core';
import TWLogoFull from './logo/tw.logo.png'

const useStyles = makeStyles({
  logo: {
    objectFit: 'contain',
    width: 'auto',
    height: 30,
  }
});

const LogoFull = () => {
  const classes = useStyles();

  return (<img className={classes.logo} src={TWLogoFull} />);
};

export default LogoFull;
