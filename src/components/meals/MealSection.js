import React, { Component } from 'react';
import MealItems from './MealItems';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

export class MealSection extends Component {
  render() {
    return (
      <Grid container>
        {this.props.mealSections.map((section) => (
          <Grid item key={section.id} xs={12} sm={6} md={4}>
            <div className="meal-section">
              <MealItems
                sectionName={section.sectionName}
                meals={section.meals}
                fullList={this.props.fullList} />           
            </div>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default MealSection

MealSection.propTypes = {
  mealSections: PropTypes.array.isRequired,
  fullList: PropTypes.bool.isRequired
}


