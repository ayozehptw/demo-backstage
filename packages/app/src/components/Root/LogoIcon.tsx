import React from 'react';
import { makeStyles } from '@material-ui/core';
import TwLogoIcon from './logo/tw.logo.icon.png';

const useStyles = makeStyles({
  logo: {
    objectFit: 'contain',
    width: 'auto',
    height: 28,
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return (
      <img className={classes.logo} src={TwLogoIcon}/>
  );
};

export default LogoIcon;
