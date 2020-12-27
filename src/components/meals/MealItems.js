import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 15,
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#fff8de',
  },
  subheader: {
    lineHeight: 2,
    fontSize: 15,
    fontWeight: 'bold',
  },
  avatar: {
    marginRight: 10,
  }
}));

export default function MealItems(props) {
  const classes = useStyles();
  // Assume the hot & new items are the top3 items within each section
  const section = props.fullList ? props.meals : props.meals.slice(0, 3);

  return (
    <List component="nav" className={classes.root}>
      <ListSubheader className={classes.subheader}>{props.sectionName}</ListSubheader>
      {section.map((item) => (
        <React.Fragment key={item.id}>
          <Divider />
          <ListItem className={classes.item}>
          <Hidden smDown>
              <Avatar className={classes.avatar} alt="菜" src="images/images.jpeg" />
          </Hidden>
          <ListItemText primary={`${item.title} $${item.price}`} secondary={item.description} />
          <React.Fragment>-0+</React.Fragment>
          </ListItem>         
          </React.Fragment>
        ))}
    </List>
  );
}
