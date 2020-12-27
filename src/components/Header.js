import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles({
  icon: {
    color: '#fabd6e',
    top: 18,
    right: 20,
    position: 'fixed',
    zIndex: 100,
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className="header">
      <p>I Pick!</p>
      <MenuBookIcon className={classes.icon}/>
    </div>
  )
}

