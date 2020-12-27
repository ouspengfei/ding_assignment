import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  float: {
    color: 'white',
    background: '#fabd6e',
    border: 0,
    bottom: 80,
    left: '50%',
    transform: 'translateX(-50%)',
    position: 'fixed',
    zIndex: 100,
  }
}));

export default function GetFloatButton() {
  const classes = useStyles();
  return (<Button variant="contained" className={classes.float}>REVIEW MY MEAL BAG</Button>)
}
