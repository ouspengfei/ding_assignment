import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MealItems from './MealItems';

const useStyles = makeStyles({
  root: {
    background: '#ffeed9',
    minWidth: 275,
    border: 0
  }
});

export default function MealSection(props) {
  const classes = useStyles();

  return props.mealSections.map((section) => (
    <Card key={section.id} className={classes.root}>
      <CardContent>
        <MealItems
          sectionName={section.sectionName}
          meals={section.meals}
          fullList={props.fullList} />
      </CardContent>
    </Card>
  ));
}

