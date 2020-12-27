import React from 'react';
import MealItems from './MealItems';
import Grid from '@material-ui/core/Grid';

export default function MealSection(props) {
  return (
    <Grid container>
      {props.mealSections.map((section) => (
        <Grid item key={section.id} xs={12} sm={6} md={4}>
          <div className="meal-section">
            <MealItems
              sectionName={section.sectionName}
              meals={section.meals}
              fullList={props.fullList} />           
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

