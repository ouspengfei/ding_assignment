import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: '100%',
    bottom: 0,
    position: 'fixed',
    zIndex: 100,
  },
  icon: {
    color: '#fabd6e'
  }
});

export default function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="For You!" icon={<FastfoodIcon className={classes.icon}/>} />
      <BottomNavigationAction label="I Pick!" icon={<MenuBookIcon className={classes.icon}/>} />
      <BottomNavigationAction label="Discover" icon={<FavoriteIcon className={classes.icon}/>} />
      <BottomNavigationAction label="Me" icon={<LocationOnIcon className={classes.icon}/>} />
    </BottomNavigation>
  )
}

